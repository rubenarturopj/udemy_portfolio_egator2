import SingleProject from "./SingleProject";

export function Projects({ projects }) {
    return (
        <>
            <div className="portfolio__projects" data-aos="fade-up">
                {projects.map((element) => (
                    <SingleProject key={element.id} singleProject={element} />
                ))}
            </div>
        </>
    );
}

export default Projects;
