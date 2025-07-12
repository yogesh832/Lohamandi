import React, { useState } from "react";

const AboutText = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="min-h-[70vh] bg-white px-6 text-black text-lg flex items-center justify-center"
      id="aboutext"
    >
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          What Drives Lohamandi
        </h2>

        <p className="text-gray-700 text-justify">
          At Lohamandi, we’re driven by a passion for delivering trusted steel
          solutions with unmatched quality. With a legacy of reliability, our
          mission is to connect suppliers and buyers in the most transparent,
          efficient, and honest way possible.
        </p>

        <p className="text-gray-700 text-justify">
          We believe in innovation with integrity. Every product we offer
          undergoes rigorous checks to meet our promise of durability,
          consistency, and value.
        </p>

        <p className="text-gray-700 text-justify">
          Our team is committed to transforming the steel supply experience
          through technology, accountability, and deep-rooted industry
          relationships.
        </p>

        {showMore && (
          <div className="space-y-4 text-gray-700 ">
            <p className="text-justify">
              Lohamandi isn’t just a marketplace, it’s a movement toward a
              smarter, more reliable steel ecosystem built on trust,
              performance, and purpose.
            </p>
            <p className="text-justify">
              We envision a future where every builder, supplier, and buyer
              feels empowered by technology and transparency. Whether you’re
              sourcing structural steel or specialty-grade materials, our
              platform ensures consistency and cost-efficiency every step of the
              way.
            </p>
            <p className="text-justify">
              With a focus on digitization and smart logistics, Lohamandi aims
              to bridge the gap between traditional trade practices and
              modern-day supply chain solutions.
            </p>
            <p className="text-justify">
              Our partnerships with reputed brands, commitment to quality
              assurance, and dedicated support team allow us to deliver not just
              products, but peace of mind.
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="underline font-semibold text-gray-700 hover:text-black transition"
          >
            {showMore ? "Show less" : "Learn more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
