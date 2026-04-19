import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const books = [
    { id: "animals", name: "ABC Animals Explorer", img: "/animals.jpg" },
    { id: "birds", name: "ABC Birds World", img: "/birds.jpg" },
    { id: "nature", name: "ABC Nature", img: "/nature.jpg" },
    { id: "space", name: "ABC Space", img: "/space.jpg" },
    { id: "india", name: "ABC India Special", img: "/india.jpg" },
    { id: "fruits", name: "ABC Fruits", img: "/fruits.jpg" },
    { id: "vegetables", name: "ABC Vegetables", img: "/vegetables.jpg" },
    { id: "science", name: "ABC Science", img: "/science.jpg" },
    { id: "home", name: "ABC Around Home", img: "/home.jpg" },
    { id: "around", name: "ABC Around Me", img: "/around.jpg" },
  ];

  const features = [
    { img: "/icons/concept.png", text: "Concept-Based ABC" },
    { img: "/icons/realworld.png", text: "Real-World Themes" },
    { img: "/icons/visual.png", text: "Visually Engaging" },
    { img: "/icons/parent.png", text: "Parent Approved" },
    { img: "/icons/curiosity.png", text: "Build Curiosity" },
  ];

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--cream)] flex justify-center">

  {/* CONTAINER (reduces width by ~10%) */}
  <div className="relative w-full max-w-[1200px] mx-auto rounded-2xl overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0">
      <img
        src="/hero.png"
        alt="Hero"
        className="w-full h-full object-cover object-right"
      />
    </div>

    {/* LIGHTER OVERLAY (more image visibility) */}
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--cream)]/90 via-[var(--cream)]/50 to-transparent"></div>

    {/* CONTENT */}
    <div className="relative px-6 md:px-12 py-12 md:py-16 flex items-center min-h-[420px] md:min-h-[480px]">

      <div className="max-w-lg">

        <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          Not Just ABC...
        </h1>

        <p className="text-xl md:text-2xl text-blue-600 mb-4">
          A World Your Child Can Explore.
        </p>

        <p className="text-gray-700 mb-6">
          From Animals to Space, from Nature to India —
          Every page builds curiosity, not just memory.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Explore Books
          </button>

          <button className="bg-white/80 backdrop-blur px-6 py-3 rounded-full hover:scale-105 transition">
            See Inside Pages
          </button>

          <button className="bg-[var(--yellow)] px-6 py-3 rounded-full hover:scale-105 transition">
            Buy Now
          </button>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* FEATURES */}
      <section className="section text-center">

  <h2 className="text-2xl md:text-3xl font-semibold mb-10">
    Why These Books Are Different
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

    {[
      { img: "/icons/concept.png", text: "Concept-Based ABC" },
      { img: "/icons/realworld.png", text: "Real-World Themes" },
      { img: "/icons/visual.png", text: "Visually Engaging" },
      { img: "/icons/parent.png", text: "Parent Approved" },
      { img: "/icons/curiosity.png", text: "Build Curiosity" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#fffaf2] p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center"
      >

        {/* 🔥 ICON CONTAINER (BIGGER + CLEAN) */}
        <div className="w-18 h-18 flex items-center justify-center mb-4 bg-white rounded-xl shadow-sm">

          {/* 🔥 ICON SIZE FIX */}
          <img
            src={item.img}
            alt={item.text}
            className="w-24 h-24 object-contain"
          />

        </div>

        <p className="text-sm md:text-base font-medium text-gray-700 text-center">
          {item.text}
        </p>

      </div>
    ))}

  </div>

</section>

      {/* BOOK COLLECTION */}
      <section className="section">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Explore Our Book Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {books.map((book) => (
            <Link key={book.id} href={`/product/${book.id}`}>
              <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">

                <img
                  src={book.img}
                  alt={book.name}
                  className="w-full h-[140px] object-cover rounded-xl mb-3"
                />

                <h3 className="text-sm font-semibold text-center">
                  {book.name}
                </h3>

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}