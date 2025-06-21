// src/pages/IndividualContent.jsx
import React from "react";

export default function IndividualContent() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-xl" id="individualcontent">
      <h1 className="text-3xl font-bold mb-4">At vero eos et accusamus et iusto odio</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel
        hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
        <li>Adipiscing elit ut aliquam purus sit amet, viverra suspendisse potenti</li>
        <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
        <li>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Sed ut perspiciatis unde omnis</h2>
      <p className="mb-4">
        Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus
        luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.
      </p>

      <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center mb-6">
        <p className="text-center text-gray-600">Image Placeholder</p>
      </div>

      <p className="text-center italic text-lg font-medium mb-6">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam."
      </p>

      <p className="font-semibold mb-2">Odio facilisis mauris sit amet massa vitae tortor.</p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut tortor
        sagittis orci a scelerisque purus semper eget at lectus urna duis convallis porta nibh venenatis cras sed felis eget neque laoreet suspendisse
        interdum consectetur libero id faucibus nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus purus in.
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
        <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
        <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
        <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
      </ul>

      <p className="mb-4">
        Nisl quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque euismod in pellentesque massa placerat volutpat lacus laoreet
        non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus amet est placerat in egestas erat.
      </p>

      <div className="bg-gray-100 text-center py-8 px-6 rounded-lg text-lg font-medium mt-10">
        “Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.”
      </div>

      <div className="mt-10">
        <h4 className="font-semibold mb-2">Share this post</h4>
        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded">📘</button>
          <button className="bg-gray-200 p-2 rounded">🔗</button>
          <button className="bg-gray-200 p-2 rounded">💼</button>
        </div>
      </div>
    </section>
  );
}
