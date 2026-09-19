'use client';

import { useEffect } from 'react';
import { CheckCircle2, CircleAlert } from 'lucide-react';

export interface ToastState {
  type: 'success' | 'error';
  message: string;
}

interface ToastProps {
  toast: ToastState | null;
  onClose: () => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed right-4 top-4 z-[60]">
      <div
        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 shadow-lg ${
          toast.type === 'success'
            ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
            : 'border-rose-200 bg-rose-50 text-rose-800'
        }`}
      >
        {toast.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <CircleAlert className="h-4 w-4" />}
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
    </div>
  );
}
