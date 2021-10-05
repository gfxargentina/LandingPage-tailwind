import React from "react";
import hero1 from "../images/Hero-01.jpg";

export const Showcase = () => {
  return (
    <>
      <section className="bg-green-200 py-32 px-10">
        <div>
          <h1 className="font-bold text-4xl mb-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            minus, soluta provident porro ex maiores nemo qui ipsam alias? Quasi
            culpa, assumenda fuga enim optio tempora est. Nihil, corrupti
            dolorum!
          </p>
          <button className="bg-blue-700 py-2 px-4 rounded-lg font-bold text-lg text-white mb-10 transition-all hover:opacity-75">
            Get Started
          </button>
        </div>
        <div className="slider">
          <img
            src={hero1}
            alt="imagen de una plaqueta de circuitos electronicos"
          />
        </div>
      </section>
    </>
  );
};
