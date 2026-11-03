import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/Gallery.css";

const galleryImages = [
    { src: "src/images/gallery-1.jpg", alt: "Tattoo artwork 1" },
    { src: "src/images/gallery-2.jpg", alt: "Tattoo artwork 2" },
    { src: "src/images/gallery-3.jpg", alt: "Tattoo artwork 3" },
    { src: "src/images/gallery-4.jpg", alt: "Tattoo artwork 4" },
    { src: "src/images/gallery-5.jpg", alt: "Tattoo artwork 5" },
    { src: "src/images/gallery-6.jpg", alt: "Tattoo artwork 6" },
    { src: "src/images/gallery-7.jpg", alt: "Tattoo artwork 7" },
    { src: "src/images/gallery-8.jpg", alt: "Tattoo artwork 8" },
    { src: "src/images/gallery-9.jpg", alt: "Tattoo artwork 9" },
    { src: "src/images/gallery-10.jpg", alt: "Tattoo artwork 10" },
    { src: "src/images/gallery-11.jpg", alt: "Tattoo artwork 11" },
    { src: "src/images/gallery-12.jpg", alt: "Tattoo artwork 12" },
];

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();


    const visibleImages = showAll
        ? galleryImages
        : galleryImages.slice(0, 6);

    return (
        <section id="gallery" className="Gallery">

            <div className="Gallery_Header">
                <h2>My Work</h2>
                <p>A collection of my tattoo work and designs.</p>
            </div>

            <div className="Gallery_Grid">
                {visibleImages.map((image, index) => (
                    <div className="Gallery_Item" key={image.src}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading={index < 6 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {galleryImages.length > 6 && (
                <div className="Gallery_Footer">
                    <button
                        className="Gallery_Button"
                        onClick={() => navigate("/work")}
                        aria-expanded={showAll}
                    >
                        {showAll ? "Show Less" : "View More"}
                        <FaArrowRight />
                    </button>
                </div>
            )}

        </section>
    );
}