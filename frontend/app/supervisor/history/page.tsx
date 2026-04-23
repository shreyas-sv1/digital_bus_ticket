'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { HistoryItem } from '@/components/supervisor/HistoryItem';

interface ScanHistory {
  id: string;
  scannedAt: string;
  status: 'VALID' | 'INVALID' | 'ALREADY_CHECKED';
  ticket: {
    passengerName: string;
    route: string;
    journey: string;
  };
}

export default function SupervisorHistory() {
  const [history, setHistory] = useState<ScanHistory[]>([]);
  const [filterMode, setFilterMode] = useState<'TODAY' | 'ALL'>('TODAY');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const query = filterMode === 'TODAY' ? '?filter=today' : '';
        const response = await fetch(`/api/verification/history${query}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        }
      } catch (error) {
        console.error('Failed to fetch history');
      }
    };
    fetchHistory();
  }, [filterMode]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/supervisor" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Scan History</h1>
      </div>

      <div className="flex bg-gray-200 p-1 rounded-xl mb-6 shadow-inner">
        <button 
          onClick={() => setFilterMode('TODAY')}
          className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-lg font-semibold transition ${filterMode === 'TODAY' ? 'bg-white text-blue-600 shadow' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <Clock className="w-5 h-5" /> Today
        </button>
        <button 
          onClick={() => setFilterMode('ALL')}
          className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-lg font-semibold transition ${filterMode === 'ALL' ? 'bg-white text-blue-600 shadow' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <Calendar className="w-5 h-5" /> All Time
        </button>
      </div>

      <div className="flex-1 overflow-auto rounded-xl">
        {history.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No scans found.</div>
        ) : (
          history.map(item => (
            <HistoryItem 
              key={item.id} 
              id={item.id}
              timestamp={item.scannedAt}
              result={item.status}
              travelerName={item.ticket.passengerName}
              route={item.ticket.route}
              journey={item.ticket.journey}
            />
          ))
        )}
      </div>
    </div>
  );
}
