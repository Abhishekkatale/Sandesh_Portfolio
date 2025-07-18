import React from "react";
import { SectionWrapper } from "../hoc";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import EBMS from "../assets/company/EBMS.png";
import BMS from "../assets/company/BMS.png";
import currencyCon from "../assets/Currency.png";
import CS from "../assets/company/CS.png";
import Crypto1 from "../assets/company/Crypto1.jpg";


const projects = [
  {
    id: 1,
    title: "Cryptovista",
    github: import.meta.env.VITE_JUSTBLOG_GITHUB_REPO,
    live: import.meta.env.VITE_JUSTBLOG_LIVE_PROJECT,
    image: Crypto1,
  },
  {
    id: 2,
    title: "Bank Management System using Java",
    github: import.meta.env.VITE_QUICKCONNECT_GITHUB_REPO,
    live: import.meta.env.VITE_QUICKCONNECT_LIVE_PROJECT,
    image: BMS,
  },
  {
    id: 3,
    title: "Coffee Shop",
    github: import.meta.env.VITE_NSS_GITHUB_REPO,
    live: import.meta.env.VITE_NSS_LIVE_PROJECT,
    image: CS,
  },
  {
    id: 4,
    title: " Currency Converter",
    github: import.meta.env.VITE_CC_GITHUB_REPO,
    live: import.meta.env.VITE_CC_LIVE_PROJECT,
    image: currencyCon,
  },
  {
    id: 5,
    title: " Elictricity Bill Management System Using Java",
    github: import.meta.env.VITE_CC_GITHUB_REPO,
    live: import.meta.env.VITE_CC_LIVE_PROJECT,
    image: EBMS,
  },
];

const Works = () => {
  return (
    <section className="flex flex-col gap-10">
      {/* Header */}
      <header className="gap-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
          Projects <br className="my-3 md:my-6" /> That Matter.
        </h1>
        <p className="text-1xl md:text-3xl lg:text-4xl font-thin">
          Turning Ideas into Reality
        </p>
      </header>

      {/* Projects Section */}
      <div className="flex flex-col justify-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-6 mt-10 md:mb-16"
          >
            {/* Project Title */}
            <header className="flex flex-row items-center gap-2">
              <div className="h-6 w-2 rounded-2xl bg-yellow-400" />
              <h2 className="text-2xl font-normal">Project {project.id}.</h2>
            </header>

            {/* Project Header with Links */}
            <div className="flex flex-row justify-between">
              <h3 className="text-2xl md:text-4xl font-normal tracking-tighter">
                {project.title}
              </h3>
              <div className="flex flex-row gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 items-center text-blue-500 hover:underline"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 items-center text-green-600 hover:underline"
                >
                  <FiExternalLink />
                  <span>Live</span>
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="w-full max-h-fit">
              <img
                src={project.image}
                alt={`${project.title} image`}
                className="w-full sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
