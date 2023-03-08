import { Navbar } from "./sections/navbar/Navbar";
import { Header } from "./sections/header/Header";
import { About } from "./sections/about/About";
import { Services } from "./sections/services/Services";
import { Portfolio } from "./sections/porfolio/Portfolio";
import { Testimonials } from "./sections/testimonials/Testimonials";
import { FAQs } from "./sections/faqs/FAQs";
import { Contact } from "./sections/contact/Contact";
import { Footer } from "./sections/footer/Footer";
import { FloatingNav } from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-switch-context";
import { useRef, useState, useEffect } from "react";

function App() {
    const { themeState } = useThemeContext();

    // START of floating navbar *********************************
    // to make the floating nav bar appear or disappear when scrolling
    const mainRef = useRef();
    const [showFloatingNav, setShowFloatingNav] = useState(true);
    const [siteYPosition, setSiteYPosition] = useState(0);
    // handlers
    const showFloatingNavHandler = () => {
        setShowFloatingNav(true);
    };
    const hideFloatingNavHandler = () => {
        setShowFloatingNav(false);
    };
    // check if floating nav show or hide
    const floatingNavToggleHandler = () => {
        //check if we scrolled up or down at least 20 px
        if (
            siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
            siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
        ) {
            showFloatingNavHandler();
        } else {
            hideFloatingNavHandler();
        }
        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };
    // to activate the checking and the show/hiding of the floating navbar
    useEffect(() => {
        const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

        // cleanup function
        return () => clearInterval(checkYPosition);
    }, [siteYPosition]);
    // END of floating navbar *************************

    return (
        <main
            className={`${themeState.primary} ${themeState.background}`}
            ref={mainRef}
        >
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <FAQs />
            <Contact />
            <Footer />
            <Theme />
            {showFloatingNav && <FloatingNav />}
        </main>
    );
}

export default App;
