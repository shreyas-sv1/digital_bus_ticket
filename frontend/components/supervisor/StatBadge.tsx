import React from 'react';

interface StatBadgeProps {
  label: string;
  count: number | string;
  colorClass: string;
  isAlert?: boolean;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ label, count, colorClass, isAlert }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md border-l-4 ${colorClass} bg-white flex flex-col items-center justify-center relative`}>
      {isAlert && (
        <span className="absolute top-2 right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      )}
      <div className="text-3xl font-bold mb-1">{count}</div>
      <div className="text-sm text-gray-600 font-medium text-center">{label}</div>
    </div>
  );
};
