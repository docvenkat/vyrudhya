"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

/* 🔥 CAROUSEL COMPONENT */
function Carousel() {
  const images = [
    "/images/learning1.jpg",
    "/images/learning2.jpg",
    "/images/learning3.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-[420px]">

      {/* IMAGE */}
      <img
        src={images[index]}
        alt="Learning Preview"
        className="w-full rounded-3xl shadow-lg transition duration-500"
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow hover:bg-white"
      >
        ›
      </button>
    </div>
  );
}

/* 🔥 MAIN PAGE */
export default function Home() {
  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[var(--cream)]">

        {/* MOBILE */}
        <div className="md:hidden flex justify-center px-4 pt-4">
          <div className="w-full max-w-[95%] rounded-3xl overflow-hidden bg-[#fffaf2] shadow-sm">

            <img
              src="/hero/hero.png"
              alt="Hero"
              className="w-full h-[240px] object-contain bg-[#fffaf2]"
            />

            <div className="p-5 text-center">
              <h1 className="text-2xl font-semibold mb-3">
                Not Just ABC...
              </h1>

              <p className="text-lg text-blue-600 mb-3">
                A World Your Child Can Explore.
              </p>

              <p className="text-gray-600 mb-5 text-sm">
                From Animals to Space, from Nature to India —
                Every page builds curiosity, not just memory.
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
          <div className="relative w-full max-w-[1150px] rounded-3xl overflow-hidden bg-[var(--cream)] shadow-sm">

            {/* IMAGE */}
            <div className="absolute inset-0 flex items-center justify-end pr-6">
              <img
                src="/hero/hero.png"
                alt="Hero"
                className="h-[95%] w-auto object-contain"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--cream)]/88 via-[var(--cream)]/50 to-transparent"></div>

            {/* CONTENT */}
            <div className="relative px-10 py-12 flex items-center min-h-[460px]">
              <div className="max-w-lg">

                <h1 className="text-5xl font-semibold mb-4">
                  Not Just ABC...
                </h1>

                <p className="text-2xl text-blue-600 mb-4">
                  A World Your Child Can Explore.
                </p>

                <p className="text-gray-700 mb-6">
                  From Animals to Space, from Nature to India —
                  Every page builds curiosity, not just memory.
                </p>

                <div className="flex gap-4">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
                    Explore Books
                  </button>

                  <button className="bg-white/80 px-6 py-3 rounded-full">
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

      {/* WHY SECTION */}
      <section className="section text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
          Why These Books Are Different
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {[
            { img: "/icons/concept.png", text: "Concept-Based ABC" },
            { img: "/icons/realworld.png", text: "Real-World Themes" },
            { img: "/icons/visual.png", text: "Visually Engaging" },
            { img: "/icons/parent.png", text: "Parent Approved" },
            { img: "/icons/curiosity.png", text: "Build Curiosity" },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#fffaf2] p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-5 bg-white rounded-2xl shadow-md group-hover:scale-110 transition duration-300">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <p className="text-base md:text-lg font-semibold text-gray-800 text-center leading-snug">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* LEARNING SECTION */}
      <section className="section flex flex-col md:flex-row items-center gap-12">

        {/* LEFT: CAROUSEL */}
        <div className="flex-1 flex justify-center">
          <Carousel />
        </div>

        {/* RIGHT: TEXT */}
        <div className="flex-1">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            See How Your Child Learns
          </h2>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Today’s children don’t just need alphabets.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            They need understanding, curiosity, and a connection to the real world.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            These books go beyond repetitive ABC learning —
            introducing meaningful exploration from A to Z.
          </p>

          <p className="text-blue-600 font-semibold text-xl mt-6">
            Every page makes a child ask:
            <span className="italic"> “What next?”</span>
          </p>

        </div>

      </section>

    </main>
  );
}