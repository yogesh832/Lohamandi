// src/pages/AboutQuality.jsx
// src/pages/AboutQuality.jsx
export default function AboutQuality() {
  const values = [
    { title: "Quality First", img: "/card.png" },
    { title: "Reliability", img: "/card2.png" },
    { title: "Transparency", img: "/card3.jpg"},
    { title: "Innovation", img: "/card4.jpg" },
    { title: "Sustainability", img: "/card5.png" },
  ];

  return (
    <section className="min-h-[100vh] bg-white px-4 py-10 text-lg flex flex-col items-center justify-center">
      <p className="text-[#D61349]-600 text-lg mb-2">Our Values</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-black">
        Built on trust. Driven by purpose.
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-xl">
        The foundation behind every bar we deliver.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 w-full max-w-6xl">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={value.img}
              alt={value.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-semibold text-center px-2">
                {value.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-gradient-to-r from-[#F17556] to-[#D61349]  text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300">
        Request Quote
      </button>
    </section>
  );
}
