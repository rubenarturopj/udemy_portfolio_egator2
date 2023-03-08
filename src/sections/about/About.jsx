// import AboutImage from "/about.jpg";
import AboutImage from "/about2.png";
import CV from "/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

export function About() {
    return (
        <>
            <section id="about" data-aos="fade-in">
                <div className="container about__container">
                    <div className="about__left">
                        <div className="about__portrait">
                            <img src={AboutImage} alt="About Image" />
                        </div>
                    </div>
                    <div className="about__right">
                        <h2>About Me</h2>
                        <div className="about__cards">
                            {data.map((item) => (
                                <Card key={item.id} className="about__card">
                                    <span className="about__card-icon">
                                        {item.icon}
                                    </span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))}
                        </div>
                        <p>
                            Building projects my clients love has always been my
                            passion. Being in the web development industry for
                            over 3 years and serving over 70 happy clients
                            worldwide, I'm always motivated to do more!
                        </p>
                        <p>
                            Hi, my name is Hermione Granger, a student from
                            Hogwarts. I'm a full-stack web developer with a
                            Bachelor's degree in Computer Science. My top
                            priority is to get your business online the right
                            way, giving you industry-standard design and all the
                            functionality you need to operate smoothly online.
                            Get in touch with the details of your project. Let's
                            get started! Check out my resume below.
                        </p>
                        <a href={CV} download className="btn primary ">
                            Download CV <HiDownload />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
