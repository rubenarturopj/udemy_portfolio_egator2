import data from "./data";
import SingleFAQ from "./SingleFAQ";
import { useEffect } from "react";
import AOS from "aos"; // animation on scroll
import "aos/dist/aos.css"; // animation on scroll css
import "./faqs.css";

export function FAQs() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    });
    return (
        <>
            <section id="faqs">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here are some questons I usually get, click to toggle the
                    answer. If you still have some more questions, send me a
                    message from the contact section.
                </p>
                <div className="container faqs__container" data-aos="fade-in">
                    {data.map((question) => (
                        <SingleFAQ key={question.id} question={question} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default FAQs;
