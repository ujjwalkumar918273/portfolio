import React from "react";

const Footer1 = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black px-5 py-16 " id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 w-[200px] mx-auto inline border-b-4 border-gray-500 pb-2">
          Contact Me
        </h2>
        <p className="py-6">
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> ujjwalkumar4876@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 7488377501
        </p>
        <p className="py-2">
          <span className="font-bold">&copy; 2023 Ujjwal kumar all right reserved</span>
        </p>
      </div>
    </section>
  );
};

export default Footer1;

