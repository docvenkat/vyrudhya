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
      <section className="section flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <h1 className="text-5xl font-semibold mb-4">
            Not Just ABC...
          </h1>

          <p className="text-2xl text-blue-600 mb-4">
            A World Your Child Can Explore.
          </p>

          <p className="text-gray-600 mb-6">
            From Animals to Space, from Nature to India —
            Every page builds curiosity, not just memory.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
              Explore Books
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-full hover:scale-105 transition">
              See Inside Pages
            </button>

            <button className="bg-[var(--yellow)] px-6 py-3 rounded-full hover:scale-105 transition">
              Buy Now
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-[500px] rounded-2xl"
          />
        </div>

      </section>

      {/* FEATURES */}
      <section className="section text-center">

        <h2 className="text-2xl font-semibold mb-8">
          Why These Books Are Different
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#fffaf2] p-5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center justify-center"
            >
              {/* ICON FIX */}
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <img
                  src={item.img}
                  alt={item.text}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <p className="text-sm font-medium text-gray-700 text-center">
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