import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = decodeURIComponent(hash.slice(1));

            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth"
                });
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
}