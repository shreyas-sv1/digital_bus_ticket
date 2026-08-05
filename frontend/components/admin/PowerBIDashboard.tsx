'use client';

import { useState, useEffect } from 'react';
import { Layout, RefreshCw, Maximize2, Settings, ExternalLink, ShieldCheck, BarChart3 } from 'lucide-react';

const DEFAULT_POWER_BI_URL =
  'https://app.powerbi.com/view?r=eyJrIjoiNGM3NjljMjItM2Y4Ny00YTRiLTg2ZDItMjBmYzg3ODRhNmI2IiwidCI6ImM2ZjE4OWZlLTZmODItNDgzMC1iNjJjLTlhY2ZlZDZhYWU4OCIsImMiOjEwfQ%3D%3D';

export default function PowerBIDashboard() {
  const [embedUrl, setEmbedUrl] = useState<string>(DEFAULT_POWER_BI_URL);
  const [tempUrl, setTempUrl] = useState<string>('');
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem('powerbi_embed_url');
    if (saved) {
      setEmbedUrl(saved);
      setTempUrl(saved);
    } else {
      setTempUrl(DEFAULT_POWER_BI_URL);
    }
  }, []);

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempUrl.trim()) return;

    let cleanUrl = tempUrl.trim();

    // Extract src if user pasted an entire <iframe> snippet
    if (cleanUrl.includes('<iframe')) {
      const match = cleanUrl.match(/src=["']([^"']+)["']/);
      if (match && match[1]) {
        cleanUrl = match[1];
      }
    }

    setEmbedUrl(cleanUrl);
    localStorage.setItem('powerbi_embed_url', cleanUrl);
    setShowConfig(false);
    setIframeKey((prev) => prev + 1);
  };

  const handleResetDefault = () => {
    setEmbedUrl(DEFAULT_POWER_BI_URL);
    setTempUrl(DEFAULT_POWER_BI_URL);
    localStorage.removeItem('powerbi_embed_url');
    setShowConfig(false);
    setIframeKey((prev) => prev + 1);
  };

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-900 p-4 overflow-hidden' : ''}`}>
      {/* Power BI Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900/5 border border-amber-500/20 p-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20 font-bold text-lg">
            F1
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-slate-900">BMTC Power BI Analytics Workspace</h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                <ShieldCheck className="h-3 w-3" /> Live Power BI Embed
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Interactive Microsoft Power BI Report • Real-time Executive Insights
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
            title="Refresh Power BI Report"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Refresh
          </button>
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            <Settings className="h-3.5 w-3.5" /> Configure Embed
          </button>
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
            title="Open in Power BI Web Service"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Open Direct
          </a>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800 transition"
          >
            <Maximize2 className="h-3.5 w-3.5" /> {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>

      {/* Configuration Panel */}
      {showConfig && (
        <form onSubmit={handleSaveConfig} className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Settings className="h-4 w-4 text-amber-600" /> Power BI Report Configuration
            </h3>
            <button
              type="button"
              onClick={handleResetDefault}
              className="text-xs text-amber-700 hover:underline font-medium"
            >
              Reset to BMTC Sample Report
            </button>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Power BI Embed URL or `&lt;iframe&gt;` Code
            </label>
            <input
              type="text"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="Paste your Power BI Publish to Web URL or <iframe src='...'></iframe> code"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
            />
            <p className="mt-1.5 text-[11px] text-slate-500">
              In Power BI Desktop/Service: File &gt; Embed report &gt; Publish to Web (public) or Embed in website.
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowConfig(false)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-amber-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-amber-700"
            >
              Save &amp; Embed Report
            </button>
          </div>
        </form>
      )}

      {/* Embedded Power BI iFrame Container */}
      <div className="relative w-full rounded-2xl border border-slate-200 bg-slate-900 shadow-lg overflow-hidden" style={{ height: isFullscreen ? 'calc(100vh - 90px)' : '680px' }}>
        <iframe
          key={iframeKey}
          title="BMTC Power BI Analytics"
          src={embedUrl}
          className="w-full h-full border-0"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
}
