'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Bus, MapPin, ChevronRight, LogOut, Ticket, Clock, Search, AlertCircle } from 'lucide-react';
import Toast, { ToastState } from '@/components/admin/Toast';
import Link from 'next/link';

export default function TravelerHome() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Bus lookup
  const [busNumber, setBusNumber] = useState('');
  const [busData, setBusData] = useState<any>(null);
  const [busError, setBusError] = useState('');
  const [busLoading, setBusLoading] = useState(false);

  // Journey selection
  const [stops, setStops] = useState<any[]>([]);
  const [boardingStop, setBoardingStop] = useState('');
  const [destinationStop, setDestinationStop] = useState('');
  const [fare, setFare] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  // Time-aware greeting
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  })();

  useEffect(() => {
    if (!user || user.role !== 'TRAVELER') {
      router.push('/login');
      return;
    }
  }, [user, router]);

  const handleBusSearch = async () => {
    if (!busNumber.trim()) return;
    setBusLoading(true);
    setBusError('');
    setBusData(null);
    setStops([]);
    setBoardingStop('');
    setDestinationStop('');
    setFare(null);

    try {
      const res = await api.get(`/buses/${encodeURIComponent(busNumber.trim().toUpperCase())}`);
      setBusData(res.data);
      // Load the stops for this bus's route
      if (res.data.route?.stops) {
        setStops(res.data.route.stops);
      } else {
        const stopsRes = await api.get(`/routes/${res.data.routeId}/stops`);
        setStops(stopsRes.data);
      }
    } catch (err: any) {
      if (err.response?.status === 404) {
        setBusError('Bus not found. Please check the number and try again.');
      } else {
        setBusError(err.response?.data?.message || 'Could not find bus. Is the backend running?');
      }
    } finally {
      setBusLoading(false);
    }
  };

  const handleStopSelect = async (stopOrder: string, type: 'boarding' | 'destination') => {
    if (type === 'boarding') {
      setBoardingStop(stopOrder);
      setDestinationStop('');
      setFare(null);
    } else {
      setDestinationStop(stopOrder);
      if (busData && boardingStop) {
        try {
          const res = await api.get(
            `/routes/${busData.routeId}/fare?from=${boardingStop}&to=${stopOrder}`
          );
          setFare(res.data.fare);
        } catch {
          setFare(null);
        }
      }
    }
  };

  const handleStartJourney = async () => {
    if (!busData || !boardingStop || !destinationStop) return;
    setLoading(true);
    try {
      const res = await api.post('/sessions/start', {
        busId: busData.id,
        boardingStopOrder: parseInt(boardingStop, 10),
        destinationStopOrder: parseInt(destinationStop, 10),
      });
      localStorage.setItem('activeSession', JSON.stringify(res.data));
      router.push('/traveler/qr');
    } catch (err: any) {
      setToast({ type: 'error', message: err.response?.data?.message || 'Failed to start session' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
          <p className="text-blue-200 text-sm">{greeting},</p>
            <h1 className="text-white text-2xl font-bold">{user?.name}</h1>
          </div>
          <button
            onClick={() => {
              logout();
              router.push('/');
            }}
            className="text-blue-200 hover:text-white"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => router.push('/traveler/history')}
            className="flex items-center gap-2 bg-white/20 rounded-xl px-4 py-2 text-white text-sm"
          >
            <Ticket className="w-4 h-4" />
            My Tickets
          </button>
          <button
            onClick={() => router.push('/traveler/active')}
            className="flex items-center gap-2 bg-white/20 rounded-xl px-4 py-2 text-white text-sm"
          >
            <Clock className="w-4 h-4" />
            Active
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 max-w-md mx-auto">
        <h2 className="text-gray-800 font-bold text-xl mb-4">Book Your Ticket</h2>

        {/* Step 1: Enter Bus Number */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
            <Bus className="w-4 h-4 text-blue-600" /> Enter Bus Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleBusSearch()}
              placeholder="e.g. KA-01-F-1234"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500 uppercase"
            />
            <button
              onClick={handleBusSearch}
              disabled={busLoading}
              className="bg-blue-800 text-white px-5 py-3 rounded-xl hover:bg-blue-900 transition disabled:opacity-50 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              {busLoading ? '...' : 'Find'}
            </button>
          </div>
          {busError && (
            <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{busError}</span>
            </div>
          )}
        </div>

        {/* Bus Found Card */}
        {busData && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Bus className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-blue-900 font-bold text-lg">{busData.busNumber}</p>
                <p className="text-blue-600 text-sm">{busData.route?.routeName}</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Select Boarding Stop */}
        {busData && stops.length > 0 && (
          <>
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
              <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" /> Where are you boarding?
              </label>
              <select
                value={boardingStop}
                onChange={(e) => handleStopSelect(e.target.value, 'boarding')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select boarding stop...</option>
                {stops.map((s) => (
                  <option key={s.id} value={s.stopOrder}>
                    {s.stopName}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Select Destination Stop */}
            {boardingStop && (
              <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
                <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" /> Where are you going?
                </label>
                <select
                  value={destinationStop}
                  onChange={(e) => handleStopSelect(e.target.value, 'destination')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select destination stop...</option>
                  {stops
                    .filter((s) => s.stopOrder > parseInt(boardingStop, 10))
                    .map((s) => (
                      <option key={s.id} value={s.stopOrder}>
                        {s.stopName}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Fare Display */}
        {fare !== null && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4 flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm">Ticket Fare</p>
              <p className="text-blue-900 text-3xl font-bold">₹{fare}</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-3">
              <Ticket className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        )}

        {/* Get QR Button */}
        {destinationStop && (
          <button
            onClick={handleStartJourney}
            disabled={loading}
            className="w-full bg-blue-800 text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 hover:bg-blue-900 transition disabled:opacity-50"
          >
            {loading ? (
              'Generating QR...'
            ) : (
              <>
                Get QR Code <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        )}

        <div className="flex gap-2">
          <Link href="/traveler/search" className="flex-1 bg-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-colors">
            <Search className="text-blue-200 w-6 h-6" />
            <span className="text-blue-100 text-sm font-semibold">Find Route</span>
          </Link>
          <Link href="/profile" className="flex-1 bg-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-colors">
            <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center font-bold text-xs">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <span className="text-blue-100 text-sm font-semibold">Profile</span>
          </Link>
        </div>
      </div>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
