import Navbar from "../../components/Navbar";
import { Cormorant_Garamond } from "next/font/google";

// ✅ FIX: Define font properly
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function About() {
  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO */}
      <section className="text-center px-4 md:px-6 py-14 md:py-20 bg-[var(--sky)] rounded-b-3xl">
        <h1 className={`text-5xl mb-4 ${cormorant.className}`}>
          About Vyrudhya
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Not just alphabet learning — a world your child can explore.
        </p>
      </section>

      {/* VISION */}
      <section className="py-12 px-4 md:px-6 max-w-3xl mx-auto space-y-8">

        {/* TITLE */}
        <h2 className={`text-2xl md:text-4xl text-center ${cormorant.className}`}>
          Our Vision
        </h2>

        {/* OPENING */}
        <div className="text-center space-y-4">
          <p className="text-2xl font-semibold">
            Every child is born curious.
          </p>
          <p className="text-lg text-gray-700">
            They don’t just see the world — they question it, explore it, and try to understand it.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="bg-[var(--green)] p-8 rounded-2xl text-center shadow-sm">
          <p>But somewhere along the way, learning becomes limited.</p>
          <p className="mt-2">Limited to repetition.</p>
          <p>Limited to memorization.</p>
          <p>Limited to alphabets without meaning.</p>
          <p className="mt-3 font-medium">And that is where the gap begins.</p>
        </div>

        {/* BIG HIGHLIGHT */}
        <div className="bg-[var(--sky)] p-5 md:p-10 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-semibold">
            Today’s children don’t just need alphabets.
          </p>
          <p className="text-xl mt-3 text-gray-700">
            They need understanding.  
            They need curiosity.  
            They need a connection to the real world.
          </p>
        </div>

        {/* BELIEF */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            This vision was born from a simple but powerful belief:
          </p>
        </div>

        {/* QUOTE */}
        <div className="border-l-4 border-yellow-400 pl-4 md:pl-6 py-3 text-base md:text-xl italic text-gray-800">
          Learning should not begin with memory —  
          it should begin with curiosity.
        </div>

        {/* EXPLANATION */}
        <div className="text-center space-y-4 text-gray-700">
          <p>
            These books were created to move beyond traditional ABC learning and introduce meaningful exploration from A to Z.
          </p>

          <p>
            Where “A” is not just a letter, but a doorway to Animals, Art, and Awareness.
          </p>

          <p>
            Where “S” is not just a sound, but Space, Science, and Discovery.
          </p>
        </div>

        {/* CONNECTION */}
        <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-200">
          <p className="text-gray-700">
            From animals to space, from nature to culture, from everyday life to deeper understanding —
          </p>
          <p className="font-medium mt-3">
            each page is designed to build connections, not just recognition.
          </p>
        </div>

        {/* DISCOVERY */}
        <div className="text-center">
          <p className="text-lg">
            Because children learn best not by being told — but by discovering.
          </p>
        </div>

        {/* QUESTION */}
        <div className="bg-[var(--cream)] p-5 md:p-10 rounded-2xl text-center border border-gray-200">
          <p className="text-xl">
            Every page is thoughtfully designed to make a child pause, think, and ask:
          </p>
          <p className="text-xl md:text-3xl mt-4 italic">
            “What next?”
          </p>
        </div>

        {/* DEPTH */}
        <div className="text-center">
          <p>This is not just about learning faster.</p>
          <p className="font-medium">This is about learning deeper.</p>
        </div>

        {/* VALUE */}
        <div className="bg-[var(--green)] p-8 rounded-2xl text-center shadow-sm">
          <p className="mb-4 font-medium">It brings together what truly matters:</p>
          <p>• Visual engagement that children love</p>
          <p>• Meaningful, value-based learning that parents trust</p>
          <p>• Educational depth that supports real understanding</p>
        </div>

        {/* PARENTS */}
        <div className="text-center">
          <p className="text-lg font-medium">
            Because parents don’t just buy books.
          </p>
          <p className="text-gray-700">
            They invest in their child’s future.
          </p>
        </div>

        {/* FUTURE */}
        <div className="bg-[var(--sky)] p-8 rounded-2xl text-center shadow-sm">
          <p>And that future needs more than alphabets.</p>
          <p className="mt-2">It needs thinkers.</p>
          <p>It needs explorers.</p>
          <p>It needs curious minds.</p>
        </div>

        {/* FINAL */}
        <div className="text-center mt-10 space-y-3">
          <p className="text-2xl font-semibold">
            This is not just alphabet learning.
          </p>
          <p className="text-xl text-gray-700">
            This is thoughtful learning — beyond the traditional method.
          </p>

          <div className="mt-6">
            <p className="text-2xl font-semibold">
              Not Just ABC…
            </p>
            <p className="text-lg text-gray-700">
              A World Your Child Can Explore.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}