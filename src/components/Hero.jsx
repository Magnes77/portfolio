import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-800 to-blue-950">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Wiktor Ciepliński
        </h1>

        <p className="text-gray-200 mb-8 text-lg">
          Aspiring Software Developer | Computer Science Student
        </p>

        <p className="text-gray-300 leading-relaxed mb-10">
          💻 I'm currently studying Computer Science at a Technical IT School in Poland. <br />
          🧠 I’m learning Java, React, SQL, Python, and other technologies while building my own projects. <br />
          🚀 I enjoy creating applications, exploring backend development, and improving my coding skills every day. <br />
          🎮 I’m also interested in Game Development and sometimes experiment with AI, bots, and small 2D games.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/magnes77"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:border-blue-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;