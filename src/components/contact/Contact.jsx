import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_6ah3fkc", "template_nc4ja8j", form.current, "4kzQJCkCeVd1iMZkF");
        e.target.reset();
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
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+918000294513</h5>
                        <a href="https://api.whatsapp.com/send?phone=918000294513" target="_blank">
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
            </div>
        </section>
    );
};

export default Contact;
