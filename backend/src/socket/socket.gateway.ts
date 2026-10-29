import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private jwtService: JwtService) {}

  handleConnection(client: Socket) {
    // Authenticate on connect — reject unauthenticated sockets immediately.
    // Token can arrive as a cookie (browser) or via socket auth handshake (mobile/native).
    const token =
      this._extractCookieToken(client) ??
      (client.handshake.auth?.token as string | undefined);

    if (!token) {
      console.warn(`Socket ${client.id} rejected: no token`);
      client.disconnect(true);
      return;
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      // Attach the verified identity to the socket for downstream use
      (client as any).user = payload;
      console.log(`Client connected: ${client.id} (user: ${payload.sub})`);
    } catch {
      console.warn(`Socket ${client.id} rejected: invalid/expired token`);
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Traveler joins their session room to receive real-time updates
  @SubscribeMessage('join-session')
  handleJoinSession(
    @MessageBody() sessionId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(`session-${sessionId}`);
    console.log(`Client ${client.id} joined session-${sessionId}`);
    return { event: 'joined', data: sessionId };
  }

  // Emit ticket issued event to traveler
  emitTicketIssued(sessionId: string, ticketData: any) {
    this.server.to(`session-${sessionId}`).emit('ticket-issued', ticketData);
  }

  // Emit session approved event
  emitSessionApproved(sessionId: string, data: any) {
    this.server.to(`session-${sessionId}`).emit('session-approved', data);
  }

  // Emit payment received event
  emitPaymentReceived(sessionId: string) {
    this.server
      .to(`session-${sessionId}`)
      .emit('payment-received', { sessionId });
  }

  // Emit online payment request to traveler (conductor chose online)
  emitOnlinePaymentRequest(
    sessionId: string,
    data: {
      orderId: string;
      amount: number;
      currency: string;
      keyId: string;
      fare: number;
      sessionId: string;
      ticketId: string;
    },
  ) {
    this.server.to(`session-${sessionId}`).emit('online-payment-request', data);
  }

  /** Extract JWT from the cookie header string sent by browsers. */
  private _extractCookieToken(client: Socket): string | undefined {
    const cookieHeader = client.handshake.headers.cookie ?? '';
    const match = cookieHeader.match(/(?:^|;\s*)token=([^;]+)/);
    return match ? match[1] : undefined;
  }
}
