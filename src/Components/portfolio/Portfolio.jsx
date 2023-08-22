import "./Portfolio.css";
import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import Pdata from "./Pdata";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(Pdata);
  // const categories = Pdata.map((item) => item.category);
  // const uniqueCategories = ["All", ...new Set(categories)];
  const uniqueCategories = ["ReactJS"];

  const filterProjectsHandler = (category) => {
    if (category === "All") {
      setProjects(Pdata);
      return;
    }
    const filterProjects = Pdata.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <>

      <section id="portfolio">
        <h2 className="pt-5 mt-5">Recent Projects</h2>
        <p className="text-center">
          Check out some of the projects I recently worked on.
        </p>
        <div className="container portfolio__container">
          <ProjectsCategories
            categories={uniqueCategories}
            onFilterProjects={filterProjectsHandler}
          />
          <Projects projects={projects} />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
