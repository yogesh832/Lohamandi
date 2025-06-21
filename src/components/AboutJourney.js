export default function AboutJourney() {
  const journey = [
    {
      year: "2020",
      title: "The Idea Was Born",
      description:
        "Frustrated by delays, confusion, and lack of transparency in steel procurement, we set out to build a better way.",
    },
    {
      year: "2021",
      title: "Loha Mandi Platform Launched",
      description:
        "We introduced our digital-first B2B/B2C steel marketplace — making custom sizing, quote requests, and eco-delivery simple.",
    },
    {
      year: "2022",
      title: "Pan-India Supplier Network",
      description:
        "Expanded our verified supplier network across major cities, ensuring better pricing and faster delivery.",
    },
    {
      year: "2023",
      title: "CNG Delivery + Custom-Cut Services",
      description:
        "We introduced green delivery and precise-length TMT to minimize waste and carbon impact.",
    },
    {
      year: "2024",
      title: "Trusted by 1000+ Builders",
      description:
        "Today, we serve a growing network of builders, contractors, and resellers across India — and we’re just getting started.",
    },
  ];

  return (
    <section className="bg-[#eef4e8] py-16 px-4 text-lg">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-lg text-gray-700 mb-2">Built on steel. Backed by vision.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Our Journey
        </h2>

        <div className="relative">
          {/* vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-0" />

          <div className="space-y-16">
            {journey.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center">
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
  className="w-10 h-10 rounded-full z-10 flex items-center justify-center text-sm font-bold shadow-md"
>
  {idx === 0 ? (
    <img src="/line1.png" alt="line_icon" className="w-full h-full object-cover rounded-full" />
  ) : (
    <img src="/line2.png" alt="line_icon" className="w-full h-full object-cover rounded-full" />
  )}
</div>

                </div>

                {/* Left side content */}
                <div className={`w-full md:w-1/2 px-6 ${idx % 2 === 0 ? "md:pl-0 md:pr-10 text-left" : "md:order-last md:pl-10 md:pr-0 text-left"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-sm text-red-600 font-semibold mb-1">{item.year}</p>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>

                {/* Empty box for spacing on the other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
