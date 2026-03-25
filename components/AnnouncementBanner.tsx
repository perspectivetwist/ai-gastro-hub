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
        <span style={{ marginRight: "6px" }}>📊</span>
        Neue Studie: Deutschlands Gastronomie in der KI-Blindzone 2026
        <span style={{ marginLeft: "6px", opacity: 0.7 }}>&rarr; Jetzt lesen</span>
      </a>
    </div>
  );
}
