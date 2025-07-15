import React from "react";

const BlogCards = () => {
const blogs = [
  {
    title: "5 Reasons Why Custom-Length TMT Bars Save You Time & Money",
    desc: "Discover how ordering TMT bars in custom lengths minimizes waste, reduces labor costs, and speeds up your construction timelines.",
    tag: "Construction Tips",
    img: "/blog1.png",
    date: "09",
    month: "JUN",
  },
  {
    title: "How Eco-Friendly Steel Delivery is Changing the Construction Game",
    desc: "Learn how sustainable logistics practices, such as optimized delivery routes and green packaging, are transforming the way steel reaches your site.",
    tag: "Sustainability",
    img: "/blog2.png",
    date: "09",
    month: "JUN",
  },
  {
    title: "TMT Bar Grades Explained: Which One is Right for Your Project?",
    desc: "Understand the differences between Fe-415, Fe-500, and Fe-550 grades to choose the best TMT bar strength for your construction needs.",
    tag: "Product Knowledge",
    img: "/blog3.png",
    date: "09",
    month: "JUN",
  },
];

  return (
    <section className="bg-white from-[#D61349] to-[#F17556] py-12 px-6 sm:px-10 lg:px-20 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-md text-black min-h-[430px] flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-white text-black rounded-md px-2 py-1 text-xs font-semibold">
                  <div>{blog.date}</div>
                  <div className="text-[10px]">{blog.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-base font-medium mb-4">{blog.desc}</p>
                <span className="text-sm  font-semibold border border-black rounded-full px-3 py-1 self-start">
                  {blog.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 font-semibold">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
