import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface TicketSummary {
  busNumber?: string;
  routeName?: string;
  boardingStop?: string;
  destination?: string;
  passengerName?: string;
  phone?: string;
  fare?: number;
  paymentMethod?: string;
  issuedAt?: string;
}

interface ResultScreenProps {
  status: 'VALID' | 'INVALID' | 'ALREADY_CHECKED';
  message: string;
  ticket?: TicketSummary;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ status, message, ticket }) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/supervisor/scan');
      return;
    }
    const timer = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown, router]);

  const config = {
    VALID: {
      bg: 'bg-green-600',
      icon: <CheckCircle className="text-white w-20 h-20 mb-4" />,
      title: 'VALID TICKET',
    },
    INVALID: {
      bg: 'bg-red-600',
      icon: <XCircle className="text-white w-20 h-20 mb-4" />,
      title: 'INVALID TICKET',
    },
    ALREADY_CHECKED: {
      bg: 'bg-amber-500',
      icon: <AlertTriangle className="text-white w-20 h-20 mb-4" />,
      title: 'ALREADY VERIFIED',
    },
  }[status];

  return (
    <div className={`min-h-screen ${config.bg} flex flex-col items-center justify-center p-6 space-y-8`}>
      <div className="flex flex-col items-center text-center">
        {config.icon}
        <h1 className="text-white font-bold text-4xl mb-2">{config.title}</h1>
        <p className="text-white text-xl">{message}</p>
      </div>

      {ticket && (
        <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl text-gray-900 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-xs text-gray-500 uppercase">Bus</p>
              <p className="font-bold">{ticket.busNumber || 'N/A'}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase">Route</p>
              <p className="font-bold">{ticket.routeName || 'N/A'}</p>
            </div>
          </div>
          
          <div className="flex flex-col border-b pb-2">
            <p className="text-xs text-gray-500 uppercase">Journey</p>
            <p className="font-bold flex items-center gap-2">
              <span>{ticket.boardingStop || 'Unknown'}</span>
              <span>→</span>
              <span>{ticket.destination || 'Unknown'}</span>
            </p>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-xs text-gray-500 uppercase">Passenger</p>
              <p className="font-bold">{ticket.passengerName || 'Unknown'} {ticket.phone ? `(${ticket.phone})` : ''}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase">Fare</p>
              <p className="font-bold text-lg">₹{ticket.fare || 0}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase">Payment</p>
              <p className="font-bold uppercase text-blue-600">{ticket.paymentMethod || 'Unknown'}</p>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-400">
            Issued: {ticket.issuedAt ? new Date(ticket.issuedAt).toLocaleString() : 'N/A'}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-4 bg-black/20 backdrop-blur-sm">
        <p className="text-white mb-2">Scanning next in {countdown}...</p>
        <button 
          onClick={() => router.push('/supervisor/scan')}
          className="w-full max-w-sm py-4 border-2 border-white text-white font-bold rounded-xl text-xl uppercase hover:bg-white hover:text-black transition flex items-center justify-center gap-2 relative z-10"
        >
          Scan Next
        </button>
      </div>
    </div>
  );
};
