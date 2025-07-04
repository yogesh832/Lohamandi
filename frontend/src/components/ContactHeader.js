import React from "react";

const ContactHeader = () => {
  return (
    <section
      className="w-full min-h-[60vh] bg-center bg-cover relative overflow-hidden rounded-2xl mt-5"
      style={{ backgroundImage: "url('/contact.png')" }}
    >
      {/* Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-[85vh] p-4 sm:p-8 md:p-12"/>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-8 md:p-12">
        <div className="text-white max-w-3xl text-center flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let's build Something Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            Have a question or need a quote? Our team is here to help you with all your steel needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;

