'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import { Bus, Clock, MapPin, Search, Ticket, X } from 'lucide-react';

const RECENT_BUSES_KEY = 'recentBuses';

export default function TravelerHomePage() {
    const router = useRouter();
    const [buses, setBuses] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedBus, setSelectedBus] = useState(null);
    const [fromOrder, setFromOrder] = useState('');
    const [toOrder, setToOrder] = useState('');
    const [activeSession, setActiveSession] = useState(null);
    const [recentBuses, setRecentBuses] = useState([]);
    const [fare, setFare] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fareLoading, setFareLoading] = useState(false);
    const [booking, setBooking] = useState(false);
    const [canceling, setCanceling] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        try {
            setRecentBuses(JSON.parse(localStorage.getItem(RECENT_BUSES_KEY) || '[]'));
        } catch {
            setRecentBuses([]);
        }
        Promise.all([api.get('/buses'), api.get('/sessions/my/active')])
            .then(([busResponse, sessionResponse]) => {
                setBuses(busResponse.data);
                setActiveSession(sessionResponse.data[0] || null);
            })
            .catch(() => setError('Could not load buses or your active trip. Please try again.'))
            .finally(() => setLoading(false));
    }, []);

    const filteredBuses = useMemo(() => {
        const search = query.trim().toLowerCase();
        if (!search) return [];
        return buses.filter((bus) =>
            bus.busNumber.toLowerCase().includes(search)
            || bus.route?.routeName?.toLowerCase().includes(search),
        ).slice(0, 6);
    }, [buses, query]);

    useEffect(() => {
        setFare(null);
        if (!selectedBus || !fromOrder || !toOrder || Number(fromOrder) >= Number(toOrder)) return;
        setFareLoading(true);
        api.get(`/routes/${selectedBus.routeId}/fare?from=${fromOrder}&to=${toOrder}`)
            .then((response) => setFare(response.data.fare))
            .catch(() => setError('Could not estimate the fare. Please choose the stops again.'))
            .finally(() => setFareLoading(false));
    }, [fromOrder, selectedBus, toOrder]);

    const chooseBus = (bus) => {
        setSelectedBus(bus);
        setQuery(bus.busNumber);
        setFromOrder('');
        setToOrder('');
        const updated = [bus.busNumber, ...recentBuses.filter((number) => number !== bus.busNumber)].slice(0, 5);
        setRecentBuses(updated);
        localStorage.setItem(RECENT_BUSES_KEY, JSON.stringify(updated));
    };

    const cancelActiveSession = async () => {
        if (!activeSession) return;
        setCanceling(true);
        setError('');
        try {
            await api.patch(`/sessions/${activeSession.id}/cancel`);
            setActiveSession(null);
            localStorage.removeItem('activeSession');
        } catch (err) {
            setError(err.response?.data?.message || 'Could not cancel this trip. Please try again.');
        } finally {
            setCanceling(false);
        }
    };

    const startBooking = async () => {
        if (!selectedBus || !fromOrder || !toOrder || fare === null) return;
        setBooking(true);
        setError('');
        try {
            const response = await api.post('/sessions/start', {
                busId: selectedBus.id,
                boardingStopOrder: Number(fromOrder),
                destinationStopOrder: Number(toOrder),
            });
            localStorage.setItem('activeSession', JSON.stringify(response.data));
            router.push('/traveler/qr');
        } catch (err) {
            setError(err.response?.data?.message || 'Could not start your trip. Please try again.');
        } finally {
            setBooking(false);
        }
    };

    const stops = selectedBus?.route?.stops || [];

    return (
        <main className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-gradient-to-r from-blue-800 to-indigo-800 px-5 pt-10 pb-8 text-white">
                <p className="text-blue-200 text-sm">BMTC SmartTicket</p>
                <h1 className="mt-1 text-2xl font-bold">Where are you going?</h1>
                <p className="mt-2 text-sm text-blue-100">Find your bus and book a ticket.</p>
            </header>

            <div className="mx-auto max-w-xl space-y-5 px-4 py-5">
                {activeSession && (
                    <section className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase text-blue-700">Active trip</p>
                                <p className="mt-1 font-bold text-gray-900">{activeSession.bus?.busNumber}</p>
                                <p className="mt-1 text-sm text-gray-600">
                                    {activeSession.boardingStop?.stopName} → {activeSession.destinationStop?.stopName}
                                </p>
                            </div>
                            <button onClick={cancelActiveSession} disabled={canceling} aria-label="Cancel active trip"
                                className="rounded-lg p-2 text-gray-500 hover:bg-red-50 hover:text-red-600 disabled:opacity-50">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <Link href="/traveler/qr" className="mt-4 block rounded-xl bg-blue-800 py-3 text-center font-semibold text-white">
                            Resume trip
                        </Link>
                    </section>
                )}

                {error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

                <section className="rounded-2xl bg-white p-4 shadow-sm">
                    <label htmlFor="bus-search" className="mb-2 block text-sm font-semibold text-gray-800">Search by bus number or route</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input id="bus-search" value={query} onChange={(event) => {
                            setQuery(event.target.value);
                            setSelectedBus(null);
                        }} placeholder="e.g. 500D" className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-gray-900 outline-none focus:border-blue-500" />
                    </div>
                    {loading && <p className="mt-3 text-sm text-gray-500">Loading active buses…</p>}
                    {!loading && query && filteredBuses.length === 0 && <p className="mt-3 text-sm text-gray-500">No matching active buses found.</p>}
                    {filteredBuses.length > 0 && (
                        <div className="mt-2 divide-y rounded-xl border">
                            {filteredBuses.map((bus) => (
                                <button key={bus.id} onClick={() => chooseBus(bus)} className="flex w-full items-center gap-3 p-3 text-left hover:bg-blue-50">
                                    <Bus className="h-5 w-5 text-blue-700" />
                                    <span><span className="block font-semibold text-gray-900">{bus.busNumber}</span><span className="text-sm text-gray-500">{bus.route?.routeName}</span></span>
                                </button>
                            ))}
                        </div>
                    )}
                    {recentBuses.length > 0 && !query && (
                        <div className="mt-4">
                            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-gray-500"><Clock className="h-4 w-4" />Recent buses</p>
                            <div className="flex flex-wrap gap-2">
                                {recentBuses.map((number) => <button key={number} onClick={() => setQuery(number)} className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">{number}</button>)}
                            </div>
                        </div>
                    )}
                </section>

                {selectedBus && (
                    <section className="space-y-4 rounded-2xl bg-white p-4 shadow-sm">
                        <h2 className="font-bold text-gray-900">{selectedBus.busNumber} · {selectedBus.route?.routeName}</h2>
                        <label className="block text-sm text-gray-600">Boarding stop
                            <select value={fromOrder} onChange={(event) => setFromOrder(event.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 p-3 text-gray-900">
                                <option value="">Select a stop</option>
                                {stops.map((stop) => <option key={stop.id} value={stop.stopOrder}>{stop.stopName}</option>)}
                            </select>
                        </label>
                        <label className="block text-sm text-gray-600">Destination
                            <select value={toOrder} onChange={(event) => setToOrder(event.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 p-3 text-gray-900">
                                <option value="">Select a stop</option>
                                {stops.filter((stop) => !fromOrder || stop.stopOrder > Number(fromOrder)).map((stop) => <option key={stop.id} value={stop.stopOrder}>{stop.stopName}</option>)}
                            </select>
                        </label>
                        {fareLoading && <p className="text-sm text-gray-500">Calculating fare…</p>}
                        {fare !== null && <p className="flex items-center gap-2 font-semibold text-gray-800"><MapPin className="h-4 w-4 text-blue-700" />Estimated fare: ₹{fare}</p>}
                        <button onClick={startBooking} disabled={booking || fareLoading || fare === null} className="w-full rounded-xl bg-blue-800 py-3 font-bold text-white disabled:opacity-50">
                            {booking ? 'Starting trip…' : 'Continue to QR'}
                        </button>
                    </section>
                )}

                <nav className="grid grid-cols-2 gap-3">
                    <Link href="/traveler/history" className="flex items-center justify-center gap-2 rounded-xl border bg-white p-3 font-semibold text-blue-800"><Ticket className="h-4 w-4" />Ticket history</Link>
                    <Link href="/traveler/search" className="flex items-center justify-center gap-2 rounded-xl border bg-white p-3 font-semibold text-blue-800"><Search className="h-4 w-4" />Find routes</Link>
                </nav>
            </div>
        </main>
    );
}
