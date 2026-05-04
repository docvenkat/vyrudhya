"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import { useState, useEffect } from "react";

export default function PreviewPage() {
  const { slug } = useParams();

  const previews = {
    animals: [
      "/books/animals/page1.jpg",
      "/books/animals/page2.jpg",
      "/books/animals/page3.jpg",
    ],
    birds: [
      "/books/birds/page1.jpg",
      "/books/birds/page2.jpg",
      "/books/birds/page3.jpg",
    ],
    vehicles: [
      "/books/vehicles/page1.jpg",
      "/books/vehicles/page2.jpg",
      "/books/vehicles/page3.jpg",
    ],
  };

  const pages = previews[slug];

  const [index, setIndex] = useState(0);
  const [isZoom, setIsZoom] = useState(false);

  // ✅ ANALYTICS TRACKING (PREVIEW VIEW)
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "view_preview", {
        product: slug,
      });
    }
  }, [slug]);

  // ✅ KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" && index < pages.length - 1) {
        setIndex((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft" && index > 0) {
        setIndex((prev) => prev - 1);
      }
      if (e.key === "Escape") {
        setIsZoom(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, pages.length]);

  if (!pages) {
    return <div className="p-10">Preview not found</div>;
  }

  const message = `Hi, I want to buy ${slug} book`;
  const link = `https://wa.me/919133233330?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HEADER */}
      <section className="text-center py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">
          See Inside
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Explore how your child will learn
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-[900px] mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <img
            src={pages[index]}
            alt={`Preview ${index + 1}`}
            onClick={() => setIsZoom(true)}
            className="w-full object-contain rounded-xl cursor-zoom-in"
          />
        </div>
      </section>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-3 flex-wrap px-4 pb-6">
        {pages.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 object-contain rounded-lg cursor-pointer border ${
              index === i ? "border-blue-500" : "border-gray-200"
            }`}
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="flex flex-col items-center gap-4 pb-20">

        <div className="text-sm text-gray-600">
          {index + 1} / {pages.length}
        </div>

        <div className="flex gap-4">

          <button
            onClick={() => setIndex((prev) => prev - 1)}
            disabled={index === 0}
            className={`px-5 py-2 rounded-full border ${
              index === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={() => setIndex((prev) => prev + 1)}
            disabled={index === pages.length - 1}
            className={`px-5 py-2 rounded-full border ${
              index === pages.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next →
          </button>

        </div>

      </div>

      {/* STICKY BUY BUTTON */}
      <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    window.gtag?.("event", "buy_click", {
      product: slug,
    })
  }
  className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--yellow)] px-8 py-3 rounded-full font-medium shadow-lg"
>
  Buy This Book
</a>

      {/* ZOOM MODAL */}
      {isZoom && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
          onClick={() => setIsZoom(false)}
        >
          <img
            src={pages[index]}
            alt="Zoom"
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setIsZoom(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}

    </main>
  );
}