import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import data from "./data";
import { useState } from "react";
import "./portfolio.css";

export function Portfolio() {
    // carries the value of the data file
    const [projects, setProjects] = useState(data);

    // to find all the categories (list of all items with repeated categories)
    const categories = data.map((item) => item.category);
    // SET returns an object with unique values
    // const uniqueCategories = new Set(categories); // i have the 3 categories but i'm missing ALL option to filter
    // I'm adding the category "All" to the filter:
    const uniqueCategories = ["all", ...new Set(categories)];

    // to filter content according category. Will return a new array with the projects that have the wanted category
    // also changing the state with the filtered elements only
    const filterProjecsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }
        const filterProjects = data.filter((element) => element.category === category); // prettier-ignore
        setProjects(filterProjects);
    };

    return (
        <>
            <section id="portfolio">
                <h2>Recent Projects</h2>
                <p>
                    Check out some of the projects I recently worked on for my
                    clients. Use the buttons to toggle the different categories.
                </p>
                <div className="container porfolio__container">
                    <ProjectsCategories
                        uniqueCategories={uniqueCategories}
                        filterProjects={filterProjecsHandler}
                    />
                    <Projects projects={projects} />
                </div>
            </section>
        </>
    );
}

export default Portfolio;
