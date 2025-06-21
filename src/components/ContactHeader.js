import React from "react";

const ContactHeader = () => {
  return (
  <section
  className="w-full min-h-[85vh] bg-center bg-cover relative overflow-hidden rounded-2xl mt-5"
  style={{ backgroundImage: "url('/contact.png')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl " />

  {/* Content */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 p-10">
    {/* Left Content */}
    <div className="flex flex-col justify-center items-start p-6 sm:p-10 text-white gap-6 sm:gap-6">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-24">
        Let's build Something Together
      </h1>
      <p className="text-sm sm:text-lg max-w-md">
        Have a question or need a quote? Our team is here to help you with all your steel needs.
      </p>
    </div>
  </div>
</section>


   
    
  
  );
};

export default ContactHeader;
