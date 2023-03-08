import { useState } from "react";
import CategoryButton from "./CategoryButton";

export function ProjectsCategories({ uniqueCategories, filterProjects }) {
    // current selected category
    const [activeCategory, setActiveCategory] = useState("all");

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        filterProjects(activeCat);
    };

    return (
        <>
            <div className="portfolio__categories">
                {uniqueCategories.map((category) => (
                    <CategoryButton
                        key={category}
                        category={category}
                        onChangeCategory={() => changeCategoryHandler(category)}
                        className={`btn cat__btn ${
                            activeCategory === category ? "primary" : "white"
                        }`}
                    />
                ))}
            </div>
        </>
    );
}

export default ProjectsCategories;
