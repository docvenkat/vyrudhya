"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect (premium)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* LOGO */}
        <Link href="/" className="text-xl font-semibold">
          Vyrudhya
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">

          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          <button className="bg-[var(--yellow)] px-5 py-2 rounded-full hover:scale-105 transition">
            Buy Now
          </button>

        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-5 z-50">

          <Link
            href="/"
            className="text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button
            className="bg-[var(--yellow)] px-6 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Buy Now
          </button>

        </div>
      )}
    </nav>
  );
}