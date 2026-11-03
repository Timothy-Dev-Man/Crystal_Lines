import { useEffect, useRef } from "react";
import "../Styles/Components/AboutMeCard.css";

export default function AboutMeCard({
    title,
    paragraph,
    url,
    onActive
}) {
    const cardRef = useRef(null);

    useEffect(() => {
        const element = cardRef.current;

        if (!element) return;

        const verticalOffset = Math.round(window.innerHeight * 0.42);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onActive(url);
                }
            },
            {
                rootMargin: `-${verticalOffset}px 0px -${verticalOffset}px 0px`,
                threshold: 0
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [url, onActive]);

    return (
        <article ref={cardRef} className="About_Me_Card">
            <div className="About_Me_Card_Mobile_Media">
                <img src={url} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="About_Me_Card_Content">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        </article>
    );
}