"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {

  const images = [
    "/images/learning1.jpg",
    "/images/learning2.jpg",
    "/images/learning3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 150);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 150);
  };

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="px-6 py-14 flex justify-center">

        <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* TEXT */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center max-w-[520px]">

            <h1 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight tracking-tight">
              Not Just ABC...
            </h1>

            <p className="text-blue-600 text-lg md:text-xl mb-4 font-medium">
              A World Your Child Can Explore
            </p>

            <p className="text-gray-700 mb-7 leading-relaxed">
              Every page builds curiosity, understanding, and connection to the real world.
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() =>
                  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-500 text-white px-7 py-3 rounded-full font-medium shadow-sm tracking-tight"
              >
                Explore Books
              </button>

              <button
                onClick={() =>
                  document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white border border-gray-300 px-7 py-3 rounded-full font-medium shadow-sm tracking-tight"
              >
                See Inside
              </button>

              <button
                onClick={() =>
                  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[var(--yellow)] px-7 py-3 rounded-full font-medium shadow-sm tracking-tight"
              >
                Buy Now
              </button>

            </div>

          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 bg-[#f5f5f5] flex items-center justify-center p-6">

            <img
              src="/hero/hero.png"
              alt="Hero"
              className="max-h-[420px] w-auto object-contain rounded-xl"
            />

          </div>

        </div>

      </section>

      {/* ================= WHY ================= */}
      <section id="why" className="py-16 text-center bg-[var(--cream)]">

        <h2 className="text-3xl md:text-4xl font-semibold mb-14 tracking-tight">
          Why These Books Are Different
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 max-w-[1150px] mx-auto">

          {[
            { img: "/icons/concept.png", text: "Concept-Based ABC" },
            { img: "/icons/realworld.png", text: "Real-World Themes" },
            { img: "/icons/visual.png", text: "Visual Learning" },
            { img: "/icons/parent.png", text: "Parent Approved" },
            { img: "/icons/curiosity.png", text: "Build Curiosity" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[var(--cream)] rounded-xl shadow-sm">
                <img
                  src={item.img}
                  className="w-10 h-10 object-contain transition hover:scale-110"
                  alt={item.text}
                />
              </div>

              <p className="text-sm md:text-base font-medium text-gray-700 leading-snug">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CAROUSEL ================= */}
      <section id="preview" className="px-6 py-14 flex justify-center bg-[var(--cream)]">

        <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* IMAGE */}
          <div className="md:w-1/2 relative bg-[#f5f5f5] flex items-center justify-center p-6">

            <img
              key={current}
              src={images[current]}
              alt="Preview"
              className={`max-h-[380px] w-auto object-contain rounded-xl transition-all duration-500 ${
                fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />

            {/* ARROWS */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow-md"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow-md"
            >
              ▶
            </button>

            {/* DOTS */}
            <div className="absolute bottom-5 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full cursor-pointer transition ${
                    current === i ? "w-6 bg-blue-500" : "w-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* TEXT (EQUAL WIDTH FIXED) */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              See What Your Child Will Learn
            </h2>

            <p className="text-gray-700 mb-3 leading-relaxed">
              Today’s children don’t just need alphabets.
            </p>

            <p className="text-gray-700 mb-3 leading-relaxed">
              They need curiosity, understanding, and connection.
            </p>

            <p className="text-blue-600 font-medium mt-2">
              Every page makes them ask: <i>“What next?”</i>
            </p>

          </div>

        </div>

      </section>

      {/* ================= SHOP ================= */}
      <section id="shop" className="py-20 px-4 md:px-6 max-w-[1150px] mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight">
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
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
              >

                <div className="bg-[var(--cream)] rounded-2xl p-5 mb-6">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-[260px] object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {book.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">

                  <div className="text-left">
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
                    className="flex items-center gap-2 bg-[var(--yellow)] px-6 py-3 rounded-full font-medium shadow-sm"
                  >
                    <img
                      src="/icons/whatsapp.png"
                      className="w-4 h-4"
                      alt="WhatsApp"
                    />
                    Buy Now
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