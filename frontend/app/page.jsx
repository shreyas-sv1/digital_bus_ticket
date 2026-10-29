import Link from 'next/link';
import { Bus } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center px-6 text-center">
      <div className="flex items-center gap-2 mb-6">
        <Bus className="text-white w-8 h-8" />
        <span className="text-white font-bold text-2xl">BMTC SmartTicket</span>
      </div>
      <p className="text-blue-200 mb-10 max-w-xs">
        Book bus tickets digitally. No paper, no queues.
      </p>
      <div className="w-full max-w-xs space-y-3">
        <Link href="/login" className="block w-full bg-white text-blue-900 py-4 rounded-2xl font-bold">
          Sign in
        </Link>
        <Link href="/register" className="block w-full border border-white/40 text-white py-4 rounded-2xl font-bold">
          Create account
        </Link>
      </div>
    </div>
  );
}
