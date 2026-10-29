'use client';
import { useEffect, useId, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QRScanner({ onScan, onError }) {
    const readerId = useId();
    const onScanRef = useRef(onScan);
    const onErrorRef = useRef(onError);

    useEffect(() => {
        onScanRef.current = onScan;
        onErrorRef.current = onError;
    }, [onScan, onError]);

    useEffect(() => {
        // Use refs so the cleanup closure always sees the latest values
        // even if the component unmounts before the async start() resolves.
        const state = {
            qr: null,
            cancelled: false,
            started: false,
            stopRequested: false,
            scanHandled: false,
            stopPromise: null,
        };

        const safeStop = async () => {
            if (!state.qr) return;
            try {
                // html5-qrcode throws if stop() is called when not scanning
                if (state.qr.isScanning) {
                    await state.qr.stop();
                }
            } catch (_) {
                // Swallow "Cannot stop, scanner is not running or paused"
            }
        };

        const stopScanner = () => {
            state.stopRequested = true;
            if (!state.started || !state.qr) return Promise.resolve();
            if (!state.stopPromise) {
                state.stopPromise = safeStop();
            }
            return state.stopPromise;
        };

        const start = async () => {
            try {
                state.qr = new Html5Qrcode(readerId);
                await state.qr.start(
                    { facingMode: 'environment' },
                    { fps: 10, qrbox: { width: 240, height: 240 } },
                    (decodedText) => {
                        if (state.cancelled || state.scanHandled) return;
                        state.scanHandled = true;
                        onScanRef.current(decodedText);
                        // Stop after a successful scan; errors are swallowed silently
                        void stopScanner();
                    },
                    () => undefined
                );
                // Mark as started only AFTER qr.start() resolves
                state.started = true;
                // If cleanup already ran while we were starting, stop now
                if (state.stopRequested) {
                    await stopScanner();
                }
            } catch (err) {
                if (!state.cancelled) {
                    onErrorRef.current?.(
                        err instanceof Error ? err.message : 'Unable to access camera'
                    );
                }
            }
        };

        void start();

        return () => {
            state.cancelled = true;
            state.stopRequested = true;
            // If already started, stop now; otherwise stopScanner() will be
            // called at the end of start() because stopRequested is true.
            if (state.started) {
                void stopScanner();
            }
        };
    }, [readerId]);

    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div id={readerId} className="w-full rounded-2xl overflow-hidden bg-black" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 border-2 border-emerald-400 rounded-2xl relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400" />
                </div>
            </div>
        </div>
    );
}

