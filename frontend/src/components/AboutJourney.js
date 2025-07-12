import React from "react";

const journey = [
  {
    year: "2020",
    title: "Started Operations",
    description: "We began our journey with a vision to streamline steel supply.",
  },
  {
    year: "2021",
    title: "Expanded Network",
    description: "Partnered with major suppliers to enhance availability.",
  },
  {
    year: "2022",
    title: "Launched Online Platform",
    description: "Introduced seamless online ordering and tracking.",
  },
  {
    year: "2023",
    title: "Achieved Milestones",
    description: "Delivered over 1 lakh tons of steel across the country.",
  },
];

const AboutJourney = () => {
  return (
    <section className="bg-[#eef4e8] py-16 px-4 text-lg">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-lg text-gray-700 mb-2">
          Built on steel. Backed by vision.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Our Journey
        </h2>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-0" />
          {/* Vertical line for mobile */}
          <div className="block md:hidden absolute left-6 h-full w-[2px] bg-gray-300 z-0" />

          <div className="space-y-16">
            {journey.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Icon on the timeline line */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 
                    md:left-1/2 md:-translate-x-1/2 left-6 z-10"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300 overflow-hidden relative">
                    {/* Default Image */}
                    <img
                      src="/line2.png"
                      alt="icon"
                      className="w-10 h-10 object-cover transition-all duration-300 ease-in-out scale-100 opacity-100 group-hover:scale-105 group-hover:opacity-0 absolute"
                    />
                    {/* Hover Image */}
                    <img
                      src="/line1.png"
                      alt="icon-hover"
                      className="w-10 h-10 object-cover transition-all duration-300 ease-in-out scale-95 opacity-0 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Timeline content box */}
                <div
                  className={`
                    w-full md:w-1/2 px-6
                    ${idx % 2 === 0
                      ? "md:pl-0 md:pr-10"
                      : "md:order-last md:pl-10 md:pr-0"}
                    pl-16 md:pl-0
                  `}
                >
                <div
  className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-xl"
>
  <p className="text-sm text-red-600 font-semibold mb-1">{item.year}</p>
  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
  <p className="text-gray-700">{item.description}</p>
</div>

                </div>

                {/* For spacing/alignment on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
