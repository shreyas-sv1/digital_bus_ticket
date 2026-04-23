'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Bus, MapPin, ChevronRight, LogOut, Ticket, Clock } from 'lucide-react';

export default function TravelerHome() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedBus, setSelectedBus] = useState('');
  const [buses, setBuses] = useState<any[]>([]);
  const [stops, setStops] = useState<any[]>([]);
  const [boardingStop, setBoardingStop] = useState('');
  const [destinationStop, setDestinationStop] = useState('');
  const [fare, setFare] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'TRAVELER') {
      router.push('/login');
      return;
    }
    fetchRoutes();
    fetchBuses();
  }, [user, router]);

  const fetchRoutes = async () => {
    try {
      const res = await api.get('/routes');
      setRoutes(res.data);
    } catch {}
  };

  const fetchBuses = async () => {
    try {
      const res = await api.get('/buses');
      setBuses(res.data);
    } catch {}
  };

  const fetchStops = async (routeId: string) => {
    try {
      const res = await api.get(`/routes/${routeId}/stops`);
      setStops(res.data);
    } catch {}
  };

  const fetchFare = async (routeId: string, from: string, to: string) => {
    try {
      const res = await api.get(`/routes/${routeId}/fare?from=${from}&to=${to}`);
      setFare(res.data.fare);
    } catch {}
  };

  const handleRouteSelect = async (routeId: string) => {
    setSelectedRoute(routeId);
    setSelectedBus('');
    setBoardingStop('');
    setDestinationStop('');
    setFare(null);
    await fetchStops(routeId);
  };

  const handleStopSelect = async (stopOrder: string, type: 'boarding' | 'destination') => {
    if (type === 'boarding') {
      setBoardingStop(stopOrder);
      setDestinationStop('');
      setFare(null);
    } else {
      setDestinationStop(stopOrder);
      const route = routes.find((r) => r.id === selectedRoute);
      if (route && boardingStop) {
        await fetchFare(selectedRoute, boardingStop, stopOrder);
      }
    }
  };

  const handleStartJourney = async () => {
    if (!selectedBus || !boardingStop || !destinationStop) return;
    setLoading(true);
    try {
      const res = await api.post('/sessions/start', {
        busId: selectedBus,
        boardingStopOrder: parseInt(boardingStop, 10),
        destinationStopOrder: parseInt(destinationStop, 10),
      });
      localStorage.setItem('activeSession', JSON.stringify(res.data));
      router.push('/traveler/qr');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to start session');
    } finally {
      setLoading(false);
    }
  };

  const filteredBuses = selectedRoute
    ? buses.filter((b) => b.route?.id === selectedRoute)
    : buses;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-200 text-sm">Good day,</p>
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

      <div className="px-6 py-6 max-w-md mx-auto">
        <h2 className="text-gray-800 font-bold text-xl mb-4">Book Your Ticket</h2>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
            <Bus className="w-4 h-4" /> Select Route
          </label>
          <select
            value={selectedRoute}
            onChange={(e) => handleRouteSelect(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
          >
            <option value="">Choose a BMTC route...</option>
            {routes.map((r) => (
              <option key={r.id} value={r.id}>
                {r.routeName}
              </option>
            ))}
          </select>
        </div>

        {selectedRoute && (
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
            <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
              <Bus className="w-4 h-4" /> Select Bus
            </label>
            <select
              value={selectedBus}
              onChange={(e) => setSelectedBus(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
            >
              <option value="">Choose your bus...</option>
              {filteredBuses.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.busNumber} — {b.route?.routeName}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedBus && stops.length > 0 && (
          <>
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
              <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" /> Boarding Stop
              </label>
              <select
                value={boardingStop}
                onChange={(e) => handleStopSelect(e.target.value, 'boarding')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              >
                <option value="">Where are you boarding?</option>
                {stops.map((s) => (
                  <option key={s.id} value={s.stopOrder}>
                    {s.stopName}
                  </option>
                ))}
              </select>
            </div>

            {boardingStop && (
              <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
                <label className="text-gray-500 text-sm mb-2 block flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" /> Destination Stop
                </label>
                <select
                  value={destinationStop}
                  onChange={(e) => handleStopSelect(e.target.value, 'destination')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Where are you going?</option>
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

        {fare !== null && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4 flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm">Estimated Fare</p>
              <p className="text-blue-900 text-3xl font-bold">₹{fare}</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-3">
              <Ticket className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        )}

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
      </div>
    </div>
  );
}
