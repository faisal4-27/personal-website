"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Main navigation">
        <Link className="nav-brand" href="/">
          Portfolio
        </Link>
        <div className="nav-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className={
                "nav-link" + (pathname === link.href ? " nav-link-active" : "")
              }
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
