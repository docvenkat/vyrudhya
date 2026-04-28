"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect (kept but simplified)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600";

  return (
    <nav
      className={`sticky top-0 z-50 px-6 md:px-12 py-3 flex items-center justify-between
      ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}
    >

      {/* LOGO (FIXED SIZE) */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 md:h-11 w-auto max-h-[44px] object-contain"
        />
      </a>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center space-x-8 font-medium text-[var(--text)]">

        <a href="/" className={linkClass("/")}>Home</a>

        <a href="/about" className={linkClass("/about")}>About</a>

        {/* SHOP DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <span className="cursor-pointer hover:text-blue-600">
            Shop
          </span>

          {shopOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-md rounded-xl p-4 w-48">
              <a href="#" className="block py-1 hover:text-blue-600">Animals</a>
              <a href="#" className="block py-1 hover:text-blue-600">Space</a>
              <a href="#" className="block py-1 hover:text-blue-600">Fruits</a>
              <a href="#" className="block py-1 hover:text-blue-600">India</a>
            </div>
          )}
        </div>

        <a href="/contact" className={linkClass("/contact")}>Contact</a>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-4">

        <span className="text-xl cursor-pointer">🛒</span>

        <button className="hidden md:block bg-[var(--yellow)] px-5 py-2 rounded-full font-medium">
          Buy Now
        </button>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">

          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <button className="bg-[var(--yellow)] px-5 py-2 rounded-full">
            Buy Now
          </button>

        </div>
      )}

    </nav>
  );
}