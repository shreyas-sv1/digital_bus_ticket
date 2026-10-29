'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { ArrowLeft, Bus, MapPin, CheckCircle, Clock } from 'lucide-react';
export default function HistoryPage() {
    const router = useRouter();
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [routeFilter, setRouteFilter] = useState('');
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchHistory();
    }, [router]);
    const fetchHistory = async () => {
        try {
            const res = await api.get('/tickets/my');
            setTickets(res.data);
        }
        catch {
            setError('Could not load ticket history. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    const filteredTickets = tickets.filter((ticket) => {
        const route = ticket.routeName || ticket.route?.routeName || '';
        const matchesDate = !dateFilter || new Date(ticket.issuedAt).toISOString().slice(0, 10) === dateFilter;
        const matchesRoute = !routeFilter || route.toLowerCase().includes(routeFilter.toLowerCase());
        return matchesDate && matchesRoute;
    });
    const pageSize = 8;
    const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));
    const visibleTickets = filteredTickets.slice((page - 1) * pageSize, page * pageSize);
    const openTicket = async (ticket) => {
        setError('');
        try {
            const response = await api.get(`/tickets/${ticket.id}`);
            localStorage.setItem('issuedTicket', JSON.stringify(response.data));
            router.push('/traveler/ticket');
        } catch {
            setError('Could not load this ticket. Please try again.');
        }
    };
    return (<div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-6">
        <button onClick={() => router.back()} className="text-white mb-4">
          <ArrowLeft className="w-6 h-6"/>
        </button>
        <h1 className="text-white text-2xl font-bold">My Tickets</h1>
        <p className="text-blue-200 text-sm">Your travel history</p>
      </div>

      <div className="px-6 py-6 max-w-md mx-auto">
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-sm text-gray-600">Date
            <input type="date" value={dateFilter} onChange={(event) => { setDateFilter(event.target.value); setPage(1); }} className="mt-1 w-full rounded-xl border border-gray-200 bg-white p-3"/>
          </label>
          <label className="text-sm text-gray-600">Route
            <input type="search" value={routeFilter} onChange={(event) => { setRouteFilter(event.target.value); setPage(1); }} placeholder="Filter by route" className="mt-1 w-full rounded-xl border border-gray-200 bg-white p-3"/>
          </label>
        </div>
        {error && <div role="alert" className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        {loading && (<div className="space-y-3" aria-label="Loading tickets">
            {[1, 2, 3].map((i) => (<div key={i} className="bg-white rounded-2xl shadow-sm p-4 animate-pulse">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-4 bg-gray-200 rounded w-24"/>
                  <div className="h-4 bg-gray-200 rounded w-16"/>
                </div>
                <div className="h-3 bg-gray-100 rounded w-48 mb-2"/>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-12"/>
                  <div className="h-3 bg-gray-100 rounded w-20"/>
                </div>
              </div>))}
          </div>)}

        {!loading && filteredTickets.length === 0 && (<div className="text-center py-12">
            <Bus className="w-12 h-12 text-gray-300 mx-auto mb-3"/>
            <p className="text-gray-500">{tickets.length ? 'No tickets match these filters.' : 'No tickets yet. Start your first journey!'}</p>
          </div>)}

        <div className="space-y-3">
          {visibleTickets.map((ticket) => (<button key={ticket.id} onClick={() => openTicket(ticket)} className="w-full bg-white rounded-2xl shadow-sm p-4 text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-blue-600"/>
                  <span className="font-bold text-gray-800">{ticket.busNumber}</span>
                </div>
                <div className="flex items-center gap-1">
                  {ticket.isVerified ? (<CheckCircle className="w-4 h-4 text-green-500"/>) : (<Clock className="w-4 h-4 text-gray-400"/>)}
                  <span className={`text-xs font-semibold ${ticket.isVerified ? 'text-green-600' : 'text-gray-400'}`}>
                    {ticket.isVerified ? 'Verified' : 'Unverified'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="w-3 h-3 text-green-500"/>
                <span>{ticket.boardingStop}</span>
                <span className="text-gray-300">→</span>
                <MapPin className="w-3 h-3 text-red-500"/>
                <span>{ticket.destinationStop}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-bold">₹{ticket.fare}</span>
                <span className="text-gray-400 text-xs">
                  {new Date(ticket.issuedAt).toLocaleDateString('en-IN')}
                </span>
              </div>
            </button>))}
        </div>
        {!loading && filteredTickets.length > 0 && (
          <div className="mt-5 flex items-center justify-between">
            <button disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="rounded-lg border bg-white px-3 py-2 text-sm disabled:opacity-40">Previous</button>
            <span className="text-sm text-gray-500">Page {page} of {pageCount}</span>
            <button disabled={page >= pageCount} onClick={() => setPage((current) => current + 1)} className="rounded-lg border bg-white px-3 py-2 text-sm disabled:opacity-40">Next</button>
          </div>
        )}
      </div>
    </div>);
}
