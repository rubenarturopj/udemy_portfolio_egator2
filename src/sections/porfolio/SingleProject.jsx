import Card from "../../components/Card";

export function SingleProject({ singleProject }) {
    return (
        <>
            <Card className="portfolio__project">
                <div className="portfolio__project-image">
                    <img
                        src={singleProject.image}
                        alt="Portfolio Project Image"
                    />
                </div>
                <h4>{singleProject.title}</h4>
                <p>{singleProject.desc}</p>
                <div className="portfolio__project-cta">
                    <a
                        href={singleProject.demo}
                        className="btn sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                    <a
                        href={singleProject.github}
                        className="btn sm primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </div>
            </Card>
        </>
    );
}

export default SingleProject;
