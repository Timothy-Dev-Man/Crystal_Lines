import "../Styles/SiteFooter.css";

export default function SiteFooter() {
    return (
        <footer className="Site_Footer">
            <span>CRYSTAL LINES</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
        </footer>
    );
}
