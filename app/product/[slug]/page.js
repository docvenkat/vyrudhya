"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();

  const products = {
    animals: {
      title: "Animals ABC",
      images: [
        "/books/animals/cover.jpg",
        "/books/animals/page1.jpg",
        "/books/animals/page2.jpg",
      ],
      desc:
        "Understand animals through real-world connections — not just memorizing names. Builds curiosity and deeper learning from the start.",
      price: "₹89",
      highlights: [
        "Concept-based learning",
        "Real-world connection",
        "Visual understanding",
      ],
    },

    birds: {
      title: "Birds ABC",
      images: [
        "/books/birds/cover.jpg",
        "/books/birds/page1.jpg",
        "/books/birds/page2.jpg",
      ],
      desc:
        "Learn birds through observation and real-world connection — helping your child recognize, relate, and remember naturally.",
      price: "₹89",
      highlights: [
        "Observation-based learning",
        "Nature connection",
        "Visual clarity",
      ],
    },

    vehicles: {
      title: "Vehicles ABC",
      images: [
        "/books/vehicles/cover.jpg",
        "/books/vehicles/page1.jpg",
        "/books/vehicles/page2.jpg",
      ],
      desc:
        "Understand how vehicles move and work in the real world — building curiosity, logic, and everyday awareness.",
      price: "₹89",
      highlights: [
        "Movement concepts",
        "Real-world understanding",
        "Curiosity building",
      ],
    },
  };

  const product = products[slug];

  // ✅ ANALYTICS
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "view_product", {
        product: slug,
      });
    }
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [isOpen, setIsOpen] = useState(false);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const message = `Hi, I want to buy ${product.title} book`;
  const link = `https://wa.me/919133233330?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* PRODUCT SECTION */}
      <section className="px-6 py-14 flex justify-center">

        <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* IMAGE SIDE */}
          <div className="md:w-1/2 bg-[#f5f5f5] p-6 flex flex-col items-center">

            <img
              src={selectedImage}
              alt={product.title}
              onClick={() => setIsOpen(true)}
              className="max-h-[380px] object-contain rounded-xl mb-6 cursor-zoom-in active:scale-95 transition"
            />

            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-contain rounded-lg cursor-pointer border ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* DETAILS */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">

            <h1 className="text-3xl md:text-4xl font-semibold mb-3 tracking-tight">
              {product.title}
            </h1>

            {/* ✅ MERGED STRONG VALUE */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.desc}
            </p>

            {/* TRUST */}
            <ul className="mb-6 space-y-2 text-sm text-gray-700">
              {product.highlights.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            {/* PRICE */}
            <div className="text-2xl font-semibold mb-1">
              {product.price}
            </div>

            <p className="text-sm text-orange-600 mb-6">
              Limited early access price
            </p>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">

              {/* BUY */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();

                  window.gtag?.("event", "buy_click", {
                    product: product.title,
                  });

                  setTimeout(() => {
                    window.open(link, "_blank");
                  }, 150);
                }}
                className="bg-[var(--yellow)] px-7 py-3 rounded-full font-medium shadow-sm"
              >
                Buy Now — {product.price}
              </a>

              {/* PREVIEW */}
              <button
                onClick={() => router.push(`/product/${slug}/preview`)}
                className="bg-white border border-gray-300 px-7 py-3 rounded-full font-medium shadow-sm"
              >
                See 3 Sample Pages
              </button>

            </div>

            <p className="text-xs text-gray-500 mt-2">
              Instant WhatsApp order — no login needed
            </p>

          </div>

        </div>

      </section>

      {/* EXTRA */}
      <section className="py-14 text-center max-w-[800px] mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Why This Book Matters
        </h2>

        <p className="text-gray-700 leading-relaxed">
          This book is designed not just to teach alphabets, but to build curiosity,
          understanding, and real-world connections that stay with your child.
        </p>

      </section>

      {/* ZOOM MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}

    </main>
  );
}