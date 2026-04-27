"use client";

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

/* =========================
   SAFE CAROUSEL
========================= */
function Carousel() {
  const images = [
    "/images/learning1.jpg",
    "/images/learning2.jpg",
    "/images/learning3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[380px] mx-auto">

      <div className="relative h-[380px] flex items-center justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="learning"
            className="absolute w-full h-full object-contain rounded-2xl transition-opacity duration-500"
            style={{ opacity: index === current ? 1 : 0 }}
          />
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full cursor-pointer ${
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
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO */}
      <section>
        <div className="md:hidden px-4 pt-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

            <img
              src="/hero/hero.png"
              className="w-full h-[240px] object-cover"
              alt="hero"
            />

            <div className="p-5 text-center">
              <h1 className="text-2xl font-semibold mb-3">
                Not Just ABC...
              </h1>

              <p className="text-blue-600 mb-3">
                A World Your Child Can Explore.
              </p>

              <p className="text-gray-600 mb-5 text-sm">
                Every page builds curiosity, not memory.
              </p>

              <div className="flex flex-col gap-3">
                <button className="bg-blue-500 text-white py-3 rounded-full">
                  Explore Books
                </button>

                <button className="bg-gray-200 py-3 rounded-full">
                  See Inside Pages
                </button>

                <button className="bg-[var(--yellow)] py-3 rounded-full">
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center px-6 py-6">
          <div className="relative w-full max-w-[1150px] rounded-2xl overflow-hidden">

            <div className="absolute inset-0 flex items-center justify-end">
              <img
                src="/hero/hero.png"
                className="h-full object-contain"
                alt="hero"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--cream)]/90 to-transparent"></div>

            <div className="relative px-10 py-12 flex items-center min-h-[460px]">
              <div className="max-w-lg">

                <h1 className="text-5xl font-semibold mb-4">
                  Not Just ABC...
                </h1>

                <p className="text-2xl text-blue-600 mb-4">
                  A World Your Child Can Explore.
                </p>

                <p className="text-gray-700 mb-6">
                  Every page builds curiosity, not memory.
                </p>

                <div className="flex gap-4">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
                    Explore Books
                  </button>

                  <button className="bg-gray-200 px-6 py-3 rounded-full">
                    See Inside Pages
                  </button>

                  <button className="bg-[var(--yellow)] px-6 py-3 rounded-full">
                    Buy Now
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Why These Books Are Different
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 max-w-5xl mx-auto">
          {[
            { img: "/icons/concept.png", text: "Concept-Based ABC" },
            { img: "/icons/realworld.png", text: "Real-World Themes" },
            { img: "/icons/visual.png", text: "Visual Learning" },
            { img: "/icons/parent.png", text: "Parent Approved" },
            { img: "/icons/curiosity.png", text: "Build Curiosity" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl">
              <img src={item.img} className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING */}
      <section className="py-14 px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

        <div className="flex-1 flex justify-center">
          <Carousel />
        </div>

        <div className="flex-1 max-w-[500px] text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            See What Your Child Will Learn
          </h2>

          <p className="text-gray-700 mb-4">
            Today’s children don’t just need alphabets.
          </p>

          <p className="text-gray-700 mb-4">
            They need curiosity, understanding, and connection to the real world.
          </p>

          <p className="text-blue-600 font-medium">
            Every page makes a child ask:
            <span className="italic"> “What next?”</span>
          </p>
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