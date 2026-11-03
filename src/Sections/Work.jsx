import "../Styles/Gallery.css";
import SiteFooter from "../Components/SiteFooter";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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

export default function Work() {
    const navigate = useNavigate();
    return (
        <>
            <section className="Gallery">

                <div className="Gallery_Header">
                    <h2>Selected Work</h2>
                    <p>A collection of my tattoo work and designs.</p>
                </div>

                <div className="Gallery_Grid">
                    {galleryImages.map((image) => (
                        <div className="Gallery_Item" key={image.src}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="Gallery_Footer">
                    <Link
                        className="Gallery_Button"
                        to="/#contact"
                        onClick={(event) => scrollToSection(event, "Contact")}
                    >
                        <FaArrowLeft />
                        Contact Me
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </>
    );
}