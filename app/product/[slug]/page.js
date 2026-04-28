"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { useState } from "react";

export default function ProductPage() {
  const { slug } = useParams();

  const products = {
  animals: {
    title: "Animals ABC",
    images: [
      "/books/animals/cover.jpg",
      "/books/animals/page1.jpg",
      "/books/animals/page2.jpg",
    ],
    desc: "Explore animals through concepts and visuals that build real understanding.",
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
    desc: "Learn birds through observation and real-world connection.",
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
    desc: "Understand vehicles and how they move the world.",
    price: "₹89",
    highlights: [
      "Movement concepts",
      "Real-world understanding",
      "Curiosity building",
    ],
  },
}; 

  const product = products[slug];
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const message = `Hi, I want to buy ${product.title} book`;
  const link = `https://wa.me/919133233330?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* MAIN PRODUCT SECTION */}
      <section className="px-6 py-14 flex justify-center">

        <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* IMAGE SIDE */}
          <div className="md:w-1/2 bg-[#f5f5f5] p-6 flex flex-col items-center">

            {/* MAIN IMAGE */}
            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-[380px] object-contain rounded-xl mb-6"
            />

            {/* THUMBNAILS */}
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

          {/* DETAILS SIDE */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">

            <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              {product.title}
            </h1>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.desc}
            </p>

            {/* HIGHLIGHTS */}
            <ul className="mb-6 space-y-2">
              {product.highlights.map((item, i) => (
                <li key={i} className="text-gray-700 text-sm">
                  ✔ {item}
                </li>
              ))}
            </ul>

            <div className="text-2xl font-semibold mb-6">
              {product.price}
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">

              <a
                href={link}
                target="_blank"
                className="bg-[var(--yellow)] px-7 py-3 rounded-full font-medium shadow-sm"
              >
                Buy on WhatsApp
              </a>

              <button className="bg-white border border-gray-300 px-7 py-3 rounded-full font-medium shadow-sm">
                See Inside
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* EXTRA SECTION */}
      <section className="py-14 text-center max-w-[800px] mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Why This Book Matters
        </h2>

        <p className="text-gray-700 leading-relaxed">
          This book is designed not just to teach alphabets, but to build curiosity,
          understanding, and real-world connections that stay with your child.
        </p>

      </section>

    </main>
  );
} 