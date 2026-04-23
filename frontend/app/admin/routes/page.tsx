'use client';

import { useEffect, useMemo, useState } from 'react';
import api from '@/lib/api';
import SlidePanel from '@/components/admin/SlidePanel';
import Toast, { ToastState } from '@/components/admin/Toast';

interface StopItem {
  id: string;
  stopName: string;
  stopOrder: number;
  distanceFromStart: number;
}

interface FareItem {
  id: string;
  fromStopOrder: number;
  toStopOrder: number;
  amount: number;
}

interface RouteItem {
  id: string;
  routeName: string;
  totalStops: number;
  stops: StopItem[];
  fares?: FareItem[];
}

export default function AdminRoutesPage() {
  const [routes, setRoutes] = useState<RouteItem[]>([]);
  const [expandedRoute, setExpandedRoute] = useState<string | null>(null);
  const [panelMode, setPanelMode] = useState<'route' | 'stop' | 'fare' | null>(null);
  const [selectedRouteId, setSelectedRouteId] = useState<string>('');
  const [toast, setToast] = useState<ToastState | null>(null);

  const [routeForm, setRouteForm] = useState({ routeName: '', totalStops: 2 });
  const [stopForm, setStopForm] = useState({ stopName: '', stopOrder: 1, distanceFromStart: 0 });
  const [fareForm, setFareForm] = useState({ fromStopOrder: 1, toStopOrder: 2, amount: 10 });

  const load = async () => {
    const res = await api.get('/routes');
    setRoutes(res.data);
  };

  useEffect(() => {
    load().catch(() => setToast({ type: 'error', message: 'Failed to load routes.' }));
  }, []);

  const selectedRoute = useMemo(
    () => routes.find((route) => route.id === selectedRouteId) || null,
    [routes, selectedRouteId],
  );

  const openPanel = (mode: 'route' | 'stop' | 'fare', routeId?: string) => {
    setPanelMode(mode);
    if (routeId) setSelectedRouteId(routeId);
  };

  const closePanel = () => setPanelMode(null);

  const addRoute = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/routes', routeForm);
      setToast({ type: 'success', message: 'Route created.' });
      setRouteForm({ routeName: '', totalStops: 2 });
      closePanel();
      await load();
    } catch {
      setToast({ type: 'error', message: 'Failed to create route.' });
    }
  };

  const addStop = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post(`/routes/${selectedRouteId}/stops`, stopForm);
      setToast({ type: 'success', message: 'Stop added.' });
      setStopForm({ stopName: '', stopOrder: 1, distanceFromStart: 0 });
      closePanel();
      await load();
    } catch {
      setToast({ type: 'error', message: 'Failed to add stop.' });
    }
  };

  const setFare = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post(`/routes/${selectedRouteId}/fares`, fareForm);
      setToast({ type: 'success', message: 'Fare saved.' });
      closePanel();
      await load();
    } catch {
      setToast({ type: 'error', message: 'Failed to save fare.' });
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Routes</h1>
        <button
          onClick={() => openPanel('route')}
          className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
        >
          Add Route
        </button>
      </div>

      <div className="space-y-3">
        {routes.map((route) => {
          const expanded = expandedRoute === route.id;
          return (
            <article key={route.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setExpandedRoute(expanded ? null : route.id)}
                  className="text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{route.routeName}</h3>
                  <p className="text-sm text-slate-600">Stops: {route.stops.length || route.totalStops}</p>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => openPanel('stop', route.id)}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    Add Stop
                  </button>
                  <button
                    onClick={() => openPanel('fare', route.id)}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    Set Fare
                  </button>
                </div>
              </div>

              {expanded ? (
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-slate-700">Stops Timeline</p>
                    <ol className="relative border-s border-slate-300 pl-4">
                      {[...route.stops]
                        .sort((a, b) => a.stopOrder - b.stopOrder)
                        .map((stop) => (
                          <li key={stop.id} className="mb-4">
                            <span className="absolute -start-[7px] mt-1.5 h-3 w-3 rounded-full bg-cyan-500" />
                            <p className="font-medium text-slate-900">{stop.stopName}</p>
                            <p className="text-xs text-slate-500">
                              Order {stop.stopOrder} • {stop.distanceFromStart} km
                            </p>
                          </li>
                        ))}
                    </ol>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-slate-700">Fare Matrix</p>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="min-w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-3 py-2 text-left">From</th>
                            <th className="px-3 py-2 text-left">To</th>
                            <th className="px-3 py-2 text-left">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(route.fares || []).length === 0 ? (
                            <tr>
                              <td className="px-3 py-3 text-slate-500" colSpan={3}>
                                No fares configured.
                              </td>
                            </tr>
                          ) : (
                            (route.fares || []).map((fare) => (
                              <tr key={fare.id} className="border-t border-slate-100">
                                <td className="px-3 py-2">{fare.fromStopOrder}</td>
                                <td className="px-3 py-2">{fare.toStopOrder}</td>
                                <td className="px-3 py-2">Rs {fare.amount.toFixed(2)}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <SlidePanel open={panelMode === 'route'} title="Add Route" onClose={closePanel}>
        <form className="space-y-4" onSubmit={addRoute}>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Route Name</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={routeForm.routeName}
              onChange={(event) => setRouteForm((prev) => ({ ...prev, routeName: event.target.value }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Total Stops</span>
            <input
              type="number"
              min={2}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={routeForm.totalStops}
              onChange={(event) => setRouteForm((prev) => ({ ...prev, totalStops: Number(event.target.value) }))}
              required
            />
          </label>
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
            Create Route
          </button>
        </form>
      </SlidePanel>

      <SlidePanel open={panelMode === 'stop'} title="Add Stop" onClose={closePanel}>
        <form className="space-y-4" onSubmit={addStop}>
          <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
            Route: {selectedRoute?.routeName || 'Select route'}
          </p>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Stop Name</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={stopForm.stopName}
              onChange={(event) => setStopForm((prev) => ({ ...prev, stopName: event.target.value }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Stop Order</span>
            <input
              type="number"
              min={1}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={stopForm.stopOrder}
              onChange={(event) => setStopForm((prev) => ({ ...prev, stopOrder: Number(event.target.value) }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Distance From Start (km)</span>
            <input
              type="number"
              min={0}
              step="0.1"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={stopForm.distanceFromStart}
              onChange={(event) => setStopForm((prev) => ({ ...prev, distanceFromStart: Number(event.target.value) }))}
              required
            />
          </label>
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
            Add Stop
          </button>
        </form>
      </SlidePanel>

      <SlidePanel open={panelMode === 'fare'} title="Set Fare" onClose={closePanel}>
        <form className="space-y-4" onSubmit={setFare}>
          <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
            Route: {selectedRoute?.routeName || 'Select route'}
          </p>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">From Stop Order</span>
            <input
              type="number"
              min={1}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={fareForm.fromStopOrder}
              onChange={(event) => setFareForm((prev) => ({ ...prev, fromStopOrder: Number(event.target.value) }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">To Stop Order</span>
            <input
              type="number"
              min={1}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={fareForm.toStopOrder}
              onChange={(event) => setFareForm((prev) => ({ ...prev, toStopOrder: Number(event.target.value) }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Amount</span>
            <input
              type="number"
              min={1}
              step="0.5"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={fareForm.amount}
              onChange={(event) => setFareForm((prev) => ({ ...prev, amount: Number(event.target.value) }))}
              required
            />
          </label>
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
            Save Fare
          </button>
        </form>
      </SlidePanel>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
