import { useState } from "react";
import "../Styles/AboutMe.css";
import AboutMeCard from "../Components/AboutMeCard";

export default function AboutMe() {
    const aboutCards = [
        {
            title: "The Beginning",
            paragraph: "My journey into tattooing started...",
            url: "src/assets/images/first.png"
        },
        {
            title: "Finding My Style",
            paragraph: "Over time, I developed an interest in...",
            url: "src/assets/images/second.png"
        },
        {
            title: "The Artist",
            paragraph: "Today, I focus on developing...",
            url: "src/assets/images/third.png"
        }
    ];

    const [activeImage, setActiveImage] = useState(
        aboutCards[0]?.url || ""
    );

    return (
        <section id="about" className="About_Me">

            <div className="About_Me_Steps">
                {aboutCards.map((card, index) => (
                    <AboutMeCard
                        key={index}
                        {...card}
                        onActive={setActiveImage}
                    />
                ))}
            </div>

            <div className="About_Me_Visual">
                {activeImage && (
                    <img
                        key={activeImage}
                        src={activeImage}
                        alt=""
                        className="About_Me_Visual_Image"
                    />
                )}
            </div>

        </section>
    );
}