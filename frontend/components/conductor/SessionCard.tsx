import { MapPin, User } from 'lucide-react';

interface SessionCardProps {
  travelerName: string;
  travelerPhone: string;
  boardingStop: string;
  destinationStop: string;
  fare: number;
}

export default function SessionCard({
  travelerName,
  travelerPhone,
  boardingStop,
  destinationStop,
  fare,
}: SessionCardProps) {
  return (
    <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-slate-800 rounded-xl p-2">
          <User className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <p className="text-sm text-slate-400">Traveler</p>
          <p className="text-lg font-semibold">{travelerName}</p>
          <p className="text-xs text-slate-400">{travelerPhone}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
        <MapPin className="w-4 h-4 text-emerald-400" />
        <span>{boardingStop}</span>
        <span className="text-slate-600">→</span>
        <MapPin className="w-4 h-4 text-rose-400" />
        <span>{destinationStop}</span>
      </div>

      <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Fare</p>
          <p className="text-2xl font-bold">₹{fare}</p>
        </div>
        <div className="text-xs text-slate-400">Collect payment before issuing ticket</div>
      </div>
    </div>
  );
}
