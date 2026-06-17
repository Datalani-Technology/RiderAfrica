"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/become-a-driver", label: "Become a Driver" },
  { href: "/about", label: "About" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const downloadHref = isHome ? "#download" : "/#download";

  const navBg =
    scrolled || !isHome
      ? "bg-[#090E1A]/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,115,255,0.15)]"
      : "bg-transparent";

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.png" alt="Rider Africa" width={44} height={44} className="rounded-xl" />
        </Link>

        {/* Desktop nav — all links visible */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#4DA6FF] bg-[#0073FF]/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-gray-300 hover:text-white font-medium transition-colors"
          >
            Contact
          </Link>
          <a
            href={downloadHref}
            className="bg-[#0073FF] hover:bg-[#0055CC] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,115,255,0.5)] btn-glow"
          >
            Download App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-[#0D1526] border-t border-[#0073FF]/10 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-5 pt-3 space-y-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                isActive(link.href) ? "bg-[#0073FF]/10 text-[#4DA6FF]" : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-4 py-3 rounded-xl font-medium text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-gray-800">
            <a
              href={downloadHref}
              className="block text-center bg-[#0073FF] text-white font-semibold py-3 rounded-xl btn-glow mt-2"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
