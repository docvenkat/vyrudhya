import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--text)]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[var(--cream)]">

        {/* MOBILE VERSION */}
        <div className="md:hidden flex justify-center px-4 pt-4">

          <div className="w-full max-w-[95%] rounded-3xl overflow-hidden bg-[#fffaf2] shadow-sm">

            {/* IMAGE (NO CROPPING + BLENDED) */}
            <img
              src="/hero/hero.png"
              alt="Hero"
              className="w-full h-[240px] object-contain bg-[#fffaf2]"
            />

            {/* TEXT */}
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

        {/* DESKTOP VERSION */}
        <div className="hidden md:flex justify-center px-6 py-6">

          <div className="relative w-full max-w-[1150px] rounded-3xl overflow-hidden bg-[var(--cream)] shadow-sm">

            {/* IMAGE (PROPERLY CLIPPED) */}
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

        {/* ICON CONTAINER */}
        <div className="w-24 h-24 flex items-center justify-center mb-5 bg-white rounded-2xl shadow-md group-hover:scale-110 transition duration-300">

          <img
            src={item.img}
            alt={item.text}
            className="w-14 h-14 object-contain"
          />

        </div>

        {/* TEXT */}
        <p className="text-base md:text-lg font-semibold text-gray-800 text-center leading-snug">
          {item.text}
        </p>

      </div>
    ))}

  </div>

</section>

    </main>
  );
}