'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Search, MapPin, Bus, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface RouteStop {
  id: string;
  stopName: string;
  stopOrder: number;
}

interface BusData {
  id: string;
  busNumber: string;
}

interface RouteMatch {
  id: string;
  routeName: string;
  stops: RouteStop[];
  buses: BusData[];
}

export default function TravelerSearchPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<RouteMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!user || user.role !== 'TRAVELER') {
      router.replace('/login');
    }
  }, [user, router]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      api.get(`/routes/search?q=${encodeURIComponent(query)}`)
        .then(res => setResults(res.data))
        .catch(err => console.error('Search failed', err))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3 mb-4 text-blue-100">
          <Link href="/traveler" className="hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-white">Find Route or Stop</h1>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search destination, stop or route..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white rounded-2xl pl-12 pr-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            autoFocus
          />
        </div>
      </div>

      <div className="px-4 pt-6 space-y-4">
        {loading && (
          <div className="flex justify-center p-8">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}

        {!loading && query.length >= 2 && results.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="font-medium text-gray-700">No routes found</p>
            <p className="text-sm mt-1">Try a different stop name or route</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-500 ml-2 uppercase tracking-wider">
              {results.length} Route{results.length !== 1 ? 's' : ''} Found
            </p>
            
            {results.map(route => {
              const activeBuses = route.buses;
              const hasBuses = activeBuses.length > 0;
              
              return (
                <div key={route.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-5 border-b border-gray-50 flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{route.routeName}</h3>
                      <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span>{route.stops.length} stops</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {hasBuses ? (
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Active Now</span>
                          <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
                            <Bus className="w-4 h-4 text-emerald-600" />
                            {activeBuses.map(b => b.busNumber).join(', ')}
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">No active buses</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-5 py-3">
                    <p className="text-xs font-medium text-gray-500 mb-2 uppercase">Key Stops</p>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.slice(0, 4).map(stop => (
                        <span key={stop.id} className="text-xs bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded-md">
                          {stop.stopName}
                        </span>
                      ))}
                      {route.stops.length > 4 && (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-medium">
                          +{route.stops.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => {
                        // Pre-fill route for traveler if they click "Book this route"
                        // we'd need to adapt the traveler home page to accept a pre-filled route/bus
                        router.push('/traveler');
                      }}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 font-bold py-2.5 rounded-xl hover:bg-blue-100 transition"
                    >
                      Book Ticket on this Route <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
