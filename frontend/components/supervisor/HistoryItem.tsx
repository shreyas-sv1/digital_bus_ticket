import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface HistoryItemProps {
  id: string;
  timestamp: string;
  result: 'VALID' | 'INVALID' | 'ALREADY_CHECKED';
  travelerName: string;
  route: string;
  journey: string;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ result, timestamp, travelerName, route, journey }) => {
  const config = {
    VALID: {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      label: 'Valid'
    },
    INVALID: {
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      label: 'Invalid'
    },
    ALREADY_CHECKED: {
      color: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
      label: 'Checked'
    },
  }[result];

  return (
    <div className={`p-4 rounded-xl border flex items-center justify-between mb-3 shadow-sm bg-white`}>
      <div className="flex gap-4 items-center">
        <div className={`p-2 rounded-full ${config.color}`}>
          {config.icon}
        </div>
        <div>
          <div className="font-bold text-gray-900">{travelerName}</div>
          <div className="text-sm text-gray-600">{route} • {journey}</div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-right">
        <div>{new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div>{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</div>
      </div>
    </div>
  );
};
