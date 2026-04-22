"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const hide = (delay) => {
    const t = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 700);
    }, delay);
    return t;
  };

  useEffect(() => {
    const t = hide(1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setFading(false);
    setVisible(true);
    const t = hide(800);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div style={{ position: "relative", width: 88, height: 88 }}>
        {/* Outer glow track */}
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ position: "absolute", inset: 0 }}>
          <circle cx="44" cy="44" r="40" stroke="#f5efe8" strokeWidth="2" />
        </svg>

        {/* Spinning arc */}
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          style={{
            position: "absolute",
            inset: 0,
            animation: "sd-spin 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4aa70" stopOpacity="0" />
              <stop offset="100%" stopColor="#d4aa70" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            cx="44"
            cy="44"
            r="40"
            stroke="url(#arcGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 192"
            strokeDashoffset="-8"
          />
        </svg>

        {/* Inner accent ring */}
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          style={{
            position: "absolute",
            inset: 0,
            animation: "sd-spin 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse",
          }}
        >
          <circle
            cx="44"
            cy="44"
            r="30"
            stroke="#e8d5bc"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="20 170"
            strokeDashoffset="0"
          />
        </svg>

        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#d4aa70",
              animation: "sd-pulse 1.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes sd-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
}
