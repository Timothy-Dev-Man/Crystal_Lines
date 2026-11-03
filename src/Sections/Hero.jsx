
import "../Styles/Hero.css";
import lily from "../assets/hero.png";

export default function Hero() {
    return (
        <section className="hero" id="home">

            {/* Hero Content */}
            <main className="hero__main">

                <div className="hero__content">

                    <p className="hero__eyebrow">
                        <span />
                        Tattoo Artist Portfolio
                        <span />
                    </p>

                    <h1 className="hero__title">
                        <span className="hero__title-main">
                            CRYSTAL
                        </span>

                        <span className="hero__title-script">
                            Lines
                        </span>
                    </h1>

                    <p className="hero__tagline">
                        Artistry in every line.
                    </p>

                    <a href="/work" className="hero__button">
                        View My Work
                        <span>→</span>
                    </a>

                </div>

                {/* Decorative Artwork */}
                <div className="hero__artwork">

                    <div className="hero__artwork-orbit" />

                    <img
                        src={lily}
                        alt="Black and gray botanical lily illustration"
                        className="hero__lily"
                        fetchPriority="high"
                    />

                </div>

            </main>

        </section>
    );
}
