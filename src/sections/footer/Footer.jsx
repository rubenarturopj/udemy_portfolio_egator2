import { links, socials } from "./data";
import "./footer.css";

export function Footer() {
    return (
        <>
            <footer>
                <div className="container footer__container">
                    <ul className="nav__menu">
                        {links.map((item) => (
                            <li key={item.id}>
                                {/* prettier-ignore */}
                                <a href={item.link}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="footer__socials">
                        {socials.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="square"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer__copyright">
                    <small>
                        {new Date().getFullYear()} EGATOR TUTORIALS &copy; All
                        Rights Reserved
                    </small>
                </div>
            </footer>
        </>
    );
}

export default Footer;
