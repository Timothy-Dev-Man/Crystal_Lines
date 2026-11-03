import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import "../Styles/Contact.css";
import SiteFooter from "../Components/SiteFooter";

export default function Contact() {
    return (
        <section id="contact" className="Contact">

            <div className="Contact_Inner">

                <div className="Contact_Intro">
                    <span className="Contact_Eyebrow">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's create
                        <span> something permanent.</span>
                    </h2>

                    <p>
                        Have an idea for your next tattoo?
                        Interested in a custom piece?
                        I'd love to hear about it.
                    </p>
                </div>

                <div className="Contact_Details">

                    <a
                        href="mailto:your-email@example.com"
                        className="Contact_Link"
                    >
                        <FiMail />
                        <div>
                            <span>Email</span>
                            <p>CrystalLines.Artist@gmail.com</p> {/* crystallines.ink@gmail.com */}
                        </div>
                        <FiArrowUpRight className="Contact_Arrow" />
                    </a>

                    <a
                        href="https://www.tiktok.com/@crystallines.artist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact_Link"
                    >
                        <FaTiktok />
                        <div>
                            <span>TikTok</span>
                            <p>@CrystalLines.Artist</p>
                        </div>
                        <FiArrowUpRight className="Contact_Arrow" />
                    </a>

                </div>

                <div className="Contact_Buttons">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=CrystalLines.Artist@gmail.com&su=Tattoo%20Inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact_Button"
                    >
                        Message Me
                        <FiArrowUpRight />
                    </a>

                    <a
                        href="https://calendly.com/crystallines-artist/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact_Button Contact_Button_Call"
                    >
                        Book a Call
                        <FiArrowUpRight />
                    </a>
                </div>

            </div>

            <SiteFooter />

        </section>
    );
}