import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * HTTP request logger middleware.
 * Logs: METHOD  /path  STATUS  Xms
 *
 * Register in AppModule.configure() so it applies to every route.
 */
@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const ms = Date.now() - startTime;

      const level =
        statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'log';
      this.logger[level](
        `${method.padEnd(6)} ${originalUrl.padEnd(50)} ${statusCode}  ${ms}ms`,
      );
    });

    next();
  }
}
