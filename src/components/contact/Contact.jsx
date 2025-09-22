import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const [toast, setToast] = useState({ message: "", type: "" });

    const sendEmail = (e) => {
        e.preventDefault();
        setToast({ message: "Sending...", type: "info" });

        emailjs
        .sendForm("service_opdr7d8", "template_nc4ja8j", form.current, "4kzQJCkCeVd1iMZkF")
        .then(() => {
            setToast({ message: "✅ Message sent successfully!", type: "success" });
            e.target.reset();
        })
        .catch(() => {
            setToast({ message: "❌ Failed to send message. Please try again.", type: "error" });
        });

        // auto-hide after 3.5s
        setTimeout(() => setToast({ message: "", type: "" }), 3500);
    };
    
    return (
        <section section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>harshitb2006@gmail.com</h5>
                        <a href="mailto:harshitb2006@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>@harshitb2006</h5>
                        <a href="https://www.instagram.com/harshitb2006/" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>@harshitbhandari01</h5>
                        <a href="https://www.linkedin.com/in/harshitbhandari01/" target="_blank">
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
                {/* show confirmation */}
                {toast.message && <div className={`toast ${toast.type}`}>{toast.message}</div>}
            </div>
        </section>
    );
};

export default Contact;
