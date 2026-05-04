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

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // SMOOTH SCROLL (FIXED)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

    {/* TEXT SIDE */}
    <div className="md:w-1/2 p-8 flex flex-col justify-center max-w-[520px]">

      <h1 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight">
        Not Just ABC…
        <br />
        <span className="text-blue-600">
          A World Your Child Can Understand
        </span>
      </h1>

      <p className="text-gray-700 mb-5 leading-relaxed">
        These books don’t just teach letters —
        they build curiosity, understanding, and real-world connection.
      </p>

      <p className="text-sm text-gray-500 mb-7">
        Designed for curiosity • Loved by parents • Easy to start
      </p>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 text-white px-7 py-3 rounded-full font-medium shadow-sm"
        >
          Explore Books
        </button>

        <button
          onClick={() =>
            document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white border border-gray-300 px-7 py-3 rounded-full font-medium shadow-sm"
        >
          See Sample Pages
        </button>

        <button
          onClick={() =>
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[var(--yellow)] px-7 py-3 rounded-full font-medium shadow-sm"
        >
          Browse & Buy
        </button>

      </div>

    </div>

    {/* IMAGE SIDE (UNCHANGED) */}
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
        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
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
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[var(--cream)] rounded-xl">
                <img src={item.img} className="w-10 h-10" alt={item.text} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAROUSEL ================= */}
      <section id="preview" className="px-6 py-14 flex justify-center bg-[var(--cream)]">
        <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-md flex flex-col md:flex-row">

          <div className="md:w-1/2 relative bg-[#f5f5f5] flex items-center justify-center p-6">
            <img
              key={current}
              src={images[current]}
              className={`max-h-[380px] object-contain rounded-xl transition ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />

            <button onClick={prevSlide} className="absolute left-4">◀</button>
            <button onClick={nextSlide} className="absolute right-4">▶</button>
          </div>

          {/* ✅ MERGED TEXT (YOUR + IMPROVED) */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              See What Your Child Will Learn
            </h2>

            <p className="text-gray-700 mb-3">
              Today’s children don’t just need alphabets.
            </p>

            <p className="text-gray-700 mb-3">
              They need curiosity, understanding, and connection.
            </p>

            <p className="text-gray-700 mb-3">
              These books go beyond ABC — helping your child understand the real world.
            </p>

            <p className="text-blue-600 font-medium mt-2">
              Every page makes them ask: <i>“What next?”</i>
            </p>

            <button
              onClick={() => scrollToSection("shop")}
              className="mt-6 bg-[var(--yellow)] px-6 py-3 rounded-full font-medium shadow-sm"
            >
              Explore Books
            </button>

          </div>

        </div>
      </section>

      {/* ================= SHOP ================= */}
      <section id="shop" className="py-20 px-4 md:px-6 max-w-[1150px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Explore Our Books
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/books/animals.jpg",
              title: "Animals ABC",
              desc: "Build real understanding — not just memorizing alphabets.",
            },
            {
              img: "/books/birds.jpg",
              title: "Birds ABC",
              desc: "Learn through real-world observation and connection.",
            },
            {
              img: "/books/vehicles.jpg",
              title: "Vehicles ABC",
              desc: "Understand how things move in the real world.",
            },
          ].map((book, i) => {
            const slug = book.title.toLowerCase().split(" ")[0];
            const message = `Hi, I want to buy ${book.title} book`;
            const link = `https://wa.me/919133233330?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={i}
                onClick={() => (window.location.href = `/product/${slug}`)}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition flex flex-col cursor-pointer"
              >

                <div className="bg-[var(--cream)] rounded-2xl p-4 mb-5">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-[240px] object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  {book.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">

                  <div>
                    <span className="text-lg font-semibold">₹89</span>
                    <p className="text-xs text-gray-500">
                      No login • Instant WhatsApp order
                    </p>
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[var(--yellow)] px-5 py-2 rounded-full font-medium"
                  >
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