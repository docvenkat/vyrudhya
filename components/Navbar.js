"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

// Premium brand font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  // Scroll effect
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
      className={`sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >

      {/* LOGO + BRAND */}
      <a href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Vyrudhya Logo"
    className="h-14 md:h-16 w-auto object-contain"
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

        {/* CART ICON */}
        <span className="text-xl cursor-pointer">🛒</span>

        {/* BUY BUTTON */}
        <button className="hidden md:block bg-[var(--yellow)] px-5 py-2 rounded-full font-medium hover:scale-105 transition">
          Buy Now
        </button>

        {/* MOBILE MENU BUTTON */}
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