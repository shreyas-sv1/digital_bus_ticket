import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

/**
 * Global exception filter that normalises all thrown exceptions into a
 * consistent JSON shape:
 *
 * {
 *   statusCode: number,
 *   error:      string,   // HTTP status text
 *   message:    string,   // human-readable detail
 *   timestamp:  string,   // ISO-8601
 *   path:       string,   // request path
 * }
 *
 * Handles:
 *  - NestJS HttpExceptions (guards, validation, etc.)
 *  - Prisma known-request errors (P2002 unique constraint, P2025 not found, …)
 *  - Unexpected runtime errors (500)
 */
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('ExceptionFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      const body = exception.getResponse();
      message =
        typeof body === 'string'
          ? body
          : ((body as any).message ?? exception.message);
      // Validation errors are arrays — join them for readability
      if (Array.isArray(message)) message = (message as string[]).join('; ');
      error = exception.name.replace('Exception', '');
    } else if ((exception as any)?.code && (exception as any)?.meta) {
      // Prisma error
      const prismaError = exception as any;
      switch (prismaError.code) {
        case 'P2002':
          statusCode = HttpStatus.CONFLICT;
          message = `Duplicate value for field: ${(prismaError.meta?.target as string[])?.join(', ') ?? 'unknown'}`;
          error = 'Conflict';
          break;
        case 'P2025':
          statusCode = HttpStatus.NOT_FOUND;
          message = (prismaError.meta?.cause as string) ?? 'Record not found';
          error = 'Not Found';
          break;
        default:
          statusCode = HttpStatus.BAD_REQUEST;
          message = `Database error: ${prismaError.code}`;
          error = 'Bad Request';
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    if (statusCode >= 500) {
      this.logger.error(
        `${request.method} ${request.url} → ${statusCode}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(statusCode).json({
      statusCode,
      error,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
