import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";

export default function Header() {
    const { pathname } = useLocation();
    const [activeSection, setActiveSection] = useState(
        pathname === "/work" ? "work" : "home"
    );

    useEffect(() => {
        if (pathname === "/work") {
            return undefined;
        }

        const sections = [
            { id: "home", element: document.getElementById("home") },
            { id: "about", element: document.getElementById("about") },
            { id: "gallery", element: document.getElementById("gallery") },
            { id: "contact", element: document.getElementById("contact") }
        ].filter((section) => section.element);

        let frameId;
        const updateActiveSection = () => {
            frameId = undefined;
            const activationLine = window.innerHeight * 0.35;
            const currentSection = sections.filter(({ element }) => element.getBoundingClientRect().top <= activationLine).at(-1);

            setActiveSection(currentSection?.id ?? "home");
        };

        const scheduleUpdate = () => {
            if (frameId === undefined) {
                frameId = window.requestAnimationFrame(updateActiveSection);
            }
        };

        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (frameId !== undefined) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [pathname]);

    return (
        <header className="hero__header">

            <Link
                to="/#home"
                className="hero__brand"
                onClick={(event) => scrollToSection(event, "home")}
            >
                <span className="hero__brand-icon">✧</span>
                <span>Crystal Lines</span>
            </Link>

            <nav className="hero__nav">
                <Link
                    to="/#home"
                    onClick={(event) => scrollToSection(event, "home")}
                    className={pathname !== "/work" && activeSection === "home" ? "active" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/#about"
                    onClick={(event) => scrollToSection(event, "about")}
                    className={pathname !== "/work" && activeSection === "about" ? "active" : ""}
                >
                    About
                </Link>

                <Link
                    to="/work"
                    className={pathname === '/work' || activeSection === "gallery" ? "active" : ""}
                >
                    Work
                </Link>

                <Link
                    to="/#contact"
                    onClick={(event) => scrollToSection(event, "Contact")}
                    className={pathname !== "/work" && activeSection === "contact" ? "active" : ""}
                >
                    Contact
                </Link>
            </nav>

        </header>
    );
}