"use client";

import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";

/* =========================
   CAROUSEL (UNCHANGED)
========================= */
function Carousel() {
  const images = [
    "/images/learning1.jpg",
    "/images/learning2.jpg",
    "/images/learning3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      setCurrent((prev) => (prev + 1) % images.length);
    }

    if (distance < -50) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="w-full">

      <div
        className="relative w-full aspect-auto h-[260px] md:h-[380px] bg-white overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full
              object-contain md:object-contain
              transition-all duration-700 ease-in-out
              ${i === current ? "opacity-100 scale-105 md:scale-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

/* =========================
   HOME PAGE
========================= */
export default function Home() {
  return (
    <main className="bg-[var(--cream)] text-[var(--text)] min-h-screen">

      <Navbar />

      {/* HERO (UNCHANGED) */}
      <section className="px-4 py-8 md:py-12 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">

          <div className="text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-semibold mb-3 leading-tight">
              Not Just ABC...
            </h1>

            <p className="text-blue-600 mb-3 text-lg">
              A World Your Child Can Explore
            </p>

            <p className="text-gray-600 mb-6">
              Every page builds curiosity, not memory.
            </p>

            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">

              <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
                Explore Books
              </button>

              <button className="bg-gray-200 px-6 py-3 rounded-full">
                See Inside
              </button>

              <button className="bg-[var(--yellow)] px-6 py-3 rounded-full font-medium">
                Buy Now
              </button>

            </div>

          </div>

          <div className="flex justify-center">
            <img
              src="/hero/hero.png"
              alt=""
              className="w-full max-w-[380px] object-contain"
            />
          </div>

        </div>

      </section>

      {/* WHY SECTION (UNCHANGED) */}
      <section className="py-10 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Why These Books Are Different
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 max-w-5xl mx-auto">

          {[
            { img: "/icons/concept.png", text: "Concept-Based ABC" },
            { img: "/icons/realworld.png", text: "Real-World Themes" },
            { img: "/icons/visual.png", text: "Visual Learning" },
            { img: "/icons/parent.png", text: "Parent Approved" },
            { img: "/icons/curiosity.png", text: "Build Curiosity" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
            >
              <img src={item.img} className="w-10 h-10 mb-2" alt="" />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ✅ LEARNING SECTION (FIXED ONLY HERE) */}
      <section className="py-6 md:py-10 px-4 max-w-6xl mx-auto">

        {/* MOBILE: STACKED */}
        <div className="flex flex-col md:hidden gap-6">

          <Carousel />

          <div className="text-center px-2">

            <h2 className="text-2xl font-semibold mb-3">
              See What Your Child Will Learn
            </h2>

            <p className="text-gray-700 mb-2">
              Today’s children don’t just need alphabets.
            </p>

            <p className="text-gray-700 mb-2">
              They need curiosity, understanding, and connection.
            </p>

            <p className="text-blue-600 font-medium">
              Every page makes them ask:
              <span className="italic"> “What next?”</span>
            </p>

          </div>

        </div>

        {/* DESKTOP: SIDE BY SIDE (UNCHANGED) */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">

          <Carousel />

          <div className="text-left">

            <h2 className="text-3xl font-semibold mb-4">
              See What Your Child Will Learn
            </h2>

            <p className="text-gray-700 mb-3">
              Today’s children don’t just need alphabets.
            </p>

            <p className="text-gray-700 mb-3">
              They need curiosity, understanding, and connection.
            </p>

            <p className="text-blue-600 font-medium">
              Every page makes them ask:
              <span className="italic"> “What next?”</span>
            </p>

          </div>

        </div>

      </section>

      {/* SHOP */}
      <section className="py-20 px-4 md:px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
          Explore Our Books
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              img: "/books/animals.jpg",
              title: "Animals ABC",
              desc: "Explore animals through concepts and visuals.",
            },
            {
              img: "/books/birds.jpg",
              title: "Birds ABC",
              desc: "Learn birds with real-world connection.",
            },
            {
              img: "/books/vehicles.jpg",
              title: "Vehicles ABC",
              desc: "Discover vehicles and how they move the world.",
            },
          ].map((book, i) => {

            const message = `Hi, I want to buy ${book.title} book`;
            const link = `https://wa.me/919133233330?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
              >

                <div className="bg-[var(--cream)] rounded-2xl p-4 mb-5">
                  <img
                    src={book.img}
                    className="w-full h-[260px] object-contain"
                    alt={book.title}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 flex-grow">
                  {book.desc}
                </p>

                <div className="flex items-center justify-between">

                  <div>
                    <span className="text-lg font-semibold block">
                      ₹89
                    </span>
                    <p className="text-xs text-gray-500">
                      Order via WhatsApp
                    </p>
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[var(--yellow)] px-4 py-2 rounded-full font-medium"
                  >
                    <img
                      src="/icons/whatsapp.png"
                      alt="WhatsApp"
                      className="w-4 h-4"
                    />
                    <span>Buy Now</span>
                  </a>

                </div>

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
} 