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

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
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
    this.server.to(`session-${sessionId}`).emit('payment-received', { sessionId });
  }
}
