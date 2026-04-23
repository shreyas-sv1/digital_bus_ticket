'use client';

import React, { useEffect, useState } from 'react';
import { ResultScreen } from '@/components/supervisor/ResultScreen';
import { useRouter } from 'next/navigation';

export default function ScanResult() {
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem('scanResult');
    if (!data) {
      router.push('/supervisor/scan');
      return;
    }
    setResult(JSON.parse(data));
  }, [router]);

  if (!result) return <div className="min-h-screen bg-black" />; // Loading state

  return (
    <ResultScreen 
      status={result.status} 
      message={result.message} 
      ticket={result.ticket} 
    />
  );
}
