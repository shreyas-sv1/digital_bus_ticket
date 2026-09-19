interface SummaryCardProps {
  label: string;
  value: string | number;
}

export default function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-white shadow-lg">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
