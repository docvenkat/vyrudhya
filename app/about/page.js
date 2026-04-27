"use client";

import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO */}
      <section className="text-center px-4 py-12 md:py-16 bg-[var(--sky)]">

        <h1 className="text-3xl md:text-5xl font-semibold mb-2">
          About Vyrudhya
        </h1>

        <p className="max-w-xl mx-auto text-gray-700 text-sm md:text-base">
          Not just alphabet learning — a world your child can explore.
        </p>

      </section>

      {/* ABOUT VISUAL (FILLED + TIGHT) */}
      <div className="max-w-3xl mx-auto px-4 mt-8 mb-2">

        <div className="overflow-hidden rounded-2xl">

          <img
            src="/about/about-visual.png"
            alt="About Visual"
            className="w-full h-[240px] md:h-[280px] object-cover"
          />

        </div>

      </div>

      {/* DIVIDER */}
      <div className="flex justify-center my-4">
        <div className="w-12 h-[2px] bg-gray-200 rounded-full"></div>
      </div>

      {/* VISION */}
      <section className="px-4 py-8 max-w-2xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Our Vision
        </h2>

        {/* TEXT BLOCKS */}
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-700">

          <p className="bg-white px-4 py-3 rounded-lg">
            Every child is born curious. They explore the world, not just observe it.
          </p>

          <p className="bg-[var(--green)]/30 px-4 py-3 rounded-lg">
            Over time, learning becomes limited. Repetition replaces exploration.
            Alphabets turn into something memorised, not understood.
          </p>

          <p className="bg-white px-4 py-3 rounded-lg font-medium text-[var(--text)]">
            Children deserve more than ABC.
          </p>

        </div>

        {/* 3 CORE BOXES */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-sm mb-1">Curiosity First</h3>
            <p className="text-xs text-gray-600">
              Learning should spark questions, not just answers.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-sm mb-1">Real-World Learning</h3>
            <p className="text-xs text-gray-600">
              Every letter connects to real-life experiences.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-sm mb-1">Beyond Memorising</h3>
            <p className="text-xs text-gray-600">
              Understanding matters more than repetition.
            </p>
          </div>

        </div>

        {/* CONTINUED TEXT */}
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-700 mt-6">

          <p className="bg-[var(--sky)]/30 px-4 py-3 rounded-lg">
            Learning should connect with the real world — animals, nature, movement,
            everything children see every day.
          </p>

          <p className="bg-white px-4 py-3 rounded-lg">
            Our books build curiosity, not memory.
          </p>

          <p className="bg-[var(--green)]/20 px-4 py-3 rounded-lg">
            They help children see beyond letters and begin asking questions.
          </p>

          <p className="text-blue-600 font-medium mt-2">
            Learning is not the goal.
          </p>

          <p className="italic text-base md:text-lg">
            Curiosity is.
          </p>

          <p className="italic text-lg md:text-xl font-medium">
            “What next?”
          </p>

        </div>

      </section>

      {/* FOUNDER */}
      <section className="px-4 pb-12 max-w-2xl mx-auto text-center">

        <div className="flex justify-center my-4">
          <div className="w-12 h-[2px] bg-gray-200 rounded-full"></div>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          From the Creator
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Created by a mother who wanted learning to feel meaningful, not mechanical.
          Built from real observations of how children explore, think, and ask questions.
        </p>

      </section>

    </main>
  );
} 