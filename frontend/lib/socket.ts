import { io, Socket } from 'socket.io-client';
import Cookies from 'js-cookie';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    const token = Cookies.get('token');
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
      transports: ['websocket'],
      autoConnect: false,
      // Pass JWT so the backend gateway can authenticate the connection.
      // The gateway also reads the cookie directly, but this covers non-browser clients.
      auth: token ? { token } : {},
    });
  }
  return socket;
};

export const joinSession = (sessionId: string) => {
  const s = getSocket();
  if (!s.connected) s.connect();
  s.emit('join-session', sessionId);
};

export const onTicketIssued = (callback: (data: any) => void) => {
  const s = getSocket();
  s.on('ticket-issued', callback);
  return () => s.off('ticket-issued', callback);
};

export const onSessionApproved = (callback: (data: any) => void) => {
  const s = getSocket();
  s.on('session-approved', callback);
  return () => s.off('session-approved', callback);
};

export const onPaymentReceived = (callback: (data: any) => void) => {
  const s = getSocket();
  s.on('payment-received', callback);
  return () => s.off('payment-received', callback);
};

export const onOnlinePaymentRequest = (callback: (data: any) => void) => {
  const s = getSocket();
  s.on('online-payment-request', callback);
  return () => s.off('online-payment-request', callback);
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
