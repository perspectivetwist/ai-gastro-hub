"use client";

import { usePathname } from "next/navigation";

export default function AnnouncementBanner() {
  const pathname = usePathname();

  if (pathname === "/ai-readiness-report-2026") return null;

  return (
    <div
      className="relative w-full text-center"
      style={{ zIndex: 2, background: "rgba(0,0,0,0.6)", borderBottom: "1px solid rgba(245,158,11,0.2)" }}
    >
      <a
        href="/ai-readiness-report-2026"
        className="block px-4 py-2.5 text-xs sm:text-sm transition-colors duration-200 hover:opacity-80"
        style={{ color: "#F59E0B" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}><path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11"/><polyline points="9 22 12 19 9 16"/><path d="M3 10h18"/><path d="M10 3v18"/></svg>
        Neuer Report: Deutschlands Gastronomie auf KI-Blindflug 2026
        <span style={{ marginLeft: "6px", opacity: 0.7 }}>&rarr; Jetzt lesen</span>
      </a>
    </div>
  );
}
