import Logo from "/logo1.png";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/modal_context";
import "./navbar.css";

export function Navbar() {
    const { showModalHandler } = useModalContext();
    return (
        <>
            <nav>
                <div className="container nav__container">
                    {/* i want page to refresh when clicking logo */}
                    <a href="index.html" className="nav__logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <ul className="nav__menu">
                        {data.map((item) => (
                            <li key={item.id}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <button id="theme__icon" onClick={showModalHandler}>
                        <IoIosColorPalette />
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
