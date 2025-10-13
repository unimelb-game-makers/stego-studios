import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import "@/styles/contact.css";

export const Route = createFileRoute("/_layout/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  // emailjs variables, fill in when make account on gmc gmail
  const service_id = "";
  const template_id = "";
  const public_key = "";


  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          service_id,
          template_id,
          form.current,
          public_key
        )
        .then(
          () => {
            console.log("success");
            form.current?.reset();
            setIsChecked(false);
          },
          (error) => {
            console.log("failed: ", error);
          }
        );
    }
  };

  // Adjust height of message text area
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-title-container green-card">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content-container">
        
        <div className="contact-form-container green-card">
          <h2>Roar into our inbox!</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="First Name" />
            <input type="text" name="from_last_name" placeholder="Last Name" />
            <input type="email" name="reply_to" placeholder="Email Address" />
            <textarea name="message" placeholder="Message" rows={isMobile ? 7 : 12}></textarea>
            <div className="form-footer">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="not-a-bot"
                  className="not-a-bot-checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="not-a-bot">I am not a bot.</label>
              </div>
              <button
                type="submit"
                className="contact-button"
                disabled={!isChecked}
              >
                Send <FaArrowRightLong size="1.2rem" />
              </button>
            </div>
          </form>
        </div>

        <div className="contact-socials-container">
          <div className="social-card green-card">
            <h3>Follow us on Instagram!</h3>
            <a href="https://www.instagram.com/stego.studios/" target="_blank" rel="noopener noreferrer">
              <button className="contact-button">Follow <FaArrowRightLong size="1.2rem" /></button>
            </a>
          </div>
          <div className="social-card green-card">
            <h3>Join our Discord!</h3>
            <a href="https://discord.gg/eA6RbnkS" target="_blank" rel="noopener noreferrer">
              <button className="contact-button">Join <FaArrowRightLong size="1.2rem" /></button>
            </a>
          </div>
          <div className="social-card green-card">
            <h3>Check out our Youtube!</h3>
            <a href="https://www.youtube.com/@StegoStudios" target="_blank" rel="noopener noreferrer">
              <button className="contact-button">Go <FaArrowRightLong size="1.2rem" /></button>
            </a>
          </div>
          <div className="social-card green-card">
            <h3>Check out Game Makers Club!</h3>
              <button className="contact-button">In The Works!</button>
          </div>
        </div>

      </div>

    </div>
  );
}
