import React from "react";

const AboutText = () => {
  return (
    <section className="min-h-[110vh] bg-white px-6 py-16 text-black text-lg flex items-center justify-center" id="aboutext">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What Drives Us</h2>
        <p className="text-grey text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="text-grey">Lorem Ipsum is simply dummy text of the printing</p>
        <p>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="text-grey" >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
        <div className="mt-8">
          <button className="underline font-semibold hover:text-white transition">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
