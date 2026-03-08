import React from "react";

const Skills = () => {
  const skills = {
    "Programming Languages": ["Java", "JavaScript", "Python", "C++", "SQL"],
    "Frontend": ["React", "Tailwind", "HTML", "CSS", "Canvas", "JSON APIs"],
    "Backend & Tools": ["Spring Boot", "REST APIs", "Sockets", "Postman", "Git", "GitHub", "Console / Linux"],
    "GameDev": ["Unity", "Pygame", "GUI Applications"]
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Tytuł sekcji */}
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gradient-to-tr from-blue-900 to-blue-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform"
            >
              {/* Nazwa kategorii */}
              <h3 className="text-2xl font-semibold mb-4 text-white">{category}:</h3>

              {/* Lista skillów z odstępami */}
              <div>
                {items.map(skill => (
                  <span
                    key={skill}
                    className="inline-block bg-gray-800 px-4 py-2 rounded-lg text-sm text-white mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;