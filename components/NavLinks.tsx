"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  if (pathname === "/ai-readiness-report-2026") return null;

  return (
    <nav
      className="w-full flex justify-center gap-6 px-4 py-2 text-sm"
      style={{
        zIndex: 2,
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Link
        href="/"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: pathname === "/" ? "#FFFFFF" : "#888" }}
      >
        Home
      </Link>
      <Link
        href="/ueber-uns"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: pathname === "/ueber-uns" ? "#FFFFFF" : "#888" }}
      >
        &Uuml;ber uns
      </Link>
      <Link
        href="/presse"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: pathname === "/presse" ? "#FFFFFF" : "#888" }}
      >
        Presse
      </Link>
      <a
        href="https://www.ki-gastronomie.com/aeo/"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: "#888" }}
      >
        KI-Sichtbarkeit (AEO)
      </a>
      <a
        href="https://www.ki-gastronomie.com/geo/"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: "#888" }}
      >
        KI-Sichtbarkeit (GEO)
      </a>
      <a
        href="https://www.ki-gastronomie.com/agent-ready/"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: "#888" }}
      >
        KI-Nutzbarkeit
      </a>
      <a
        href="https://www.ki-gastronomie.com/security/"
        className="hover:underline transition-opacity duration-200 hover:opacity-80"
        style={{ color: "#888" }}
      >
        KI-Sicherheit
      </a>
    </nav>
  );
}
