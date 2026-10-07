import { useState } from "react";

type Category =
  | "All"
  | "Web"
  | "Mobile"
  | "Systems"
  | "Bots"
  | "UI/UX";

interface Project {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
}

const projects: Project[] = [
  {
    title: "Nafi Delivery",
    category: "Web",
    description:
      "A delivery-focused web platform connecting customers with convenient delivery services.",
  },

  {
    title: "E-commerce",
    category: "Web",
    description:
      "A modern e-commerce platform designed to provide a smooth online shopping experience.",
  },

  {
    title: "Calorie Calculator",
    category: "Mobile",
    description:
      "A mobile application for calculating and tracking daily calorie needs.",
  },

  {
    title: "Heartbeat Tracker",
    category: "Mobile",
    description:
      "A mobile application concept focused on tracking and displaying heartbeat information.",
  },

  {
    title: "Business Management System",
    category: "Systems",
    description:
      "A custom management system designed to organize business operations, data, and workflows efficiently.",
  },

  {
    title: "Telegram Bot",
    category: "Bots",
    description:
      "A Telegram-based bot for automated interactions and useful digital services.",
  },

  {
    title: "Web UI/UX Design",
    category: "UI/UX",
    description:
      "Modern and user-friendly interface designs created for websites and web applications.",
  },

  {
    title: "Mobile App UI/UX",
    category: "UI/UX",
    description:
      "Clean and intuitive interface designs created for modern mobile applications.",
  },
];

const categories: Category[] = [
  "All",
  "Web",
  "Mobile",
  "Systems",
  "Bots",
  "UI/UX",
];

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section id="projects" className="projects">

      {/* SECTION HEADER */}
      <div className="section-header">

        <p className="section-label">
          SELECTED WORK
        </p>

        <h2>
          Our Projects
        </h2>

        <p>
          Real-world digital products and technology
          solutions built by Nexora Labs.
        </p>

      </div>


      {/* FILTER BUTTONS */}
      <div className="project-filters">

        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>
        ))}

      </div>


      {/* PROJECT GRID */}
      <div className="projects-grid">

        {filteredProjects.map((project, index) => (

          <article
            className="project-card"
            key={project.title}
          >

            {/* PROJECT NUMBER */}
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>


            {/* CATEGORY */}
            <p className="project-category">
              {project.category.toUpperCase()}
            </p>


            {/* TITLE */}
            <h3>
              {project.title}
            </h3>


            {/* DESCRIPTION */}
            <p>
              {project.description}
            </p>


            {/* LINK */}
            <a
              href="#"
              className="project-link"
            >
              View Project →
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;