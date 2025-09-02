import React from "react";

const skills = [
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Git",
    img: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
  },
  {
    name: "Three.js",
    img: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png",
  },
  {
    name: "GSAP",
    img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">Ашигладаг технологиуд</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
