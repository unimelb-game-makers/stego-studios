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
  const SERVICE_ID = "service_i1we4is";
  const TEMPLATE_ID = "template_7icfkod";
  const PUBLIC_KEY = "YMpnVLWwCrT8wGXeq";


  const [isChecked, setIsChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [cooldown, setCooldown] = useState(0);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )
        .then(
          () => {
            console.log("success");
            form.current?.reset();
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            setIsChecked(false);

            // Initialise cooldown before next message
            const endTime = new Date().getTime() + 60000;
            localStorage.setItem('cooldownEndTime', endTime.toString());
            setCooldown(0);
            setShowPopup(true);
            setShowErrorMessage(false); // Clear error message on success
          },
          (error) => {
            console.log("failed: ", error);
            setErrorMessage("Oops! The message didn't send.");
            setShowErrorMessage(true);
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    } else {
      setIsSending(false);
    }
  };

  // Adjust height of message text area
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    // Get the cooldown time
    const cooldownEndTime = localStorage.getItem('cooldownEndTime');
    if (cooldownEndTime) {
        const remainingTime = Math.ceil((parseInt(cooldownEndTime) - new Date().getTime()) / 1000);
        if (remainingTime > 0) {
            setCooldown(remainingTime);
        }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Countdown cooldown
  useEffect(() => {
    if (cooldown > 0) {
        const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
        return () => clearTimeout(timer);
    }
  }, [cooldown]);

  return (
    <div className={`contact-page ${showPopup ? "blur-background" : ""}`}>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <img src="/images/contact-popup-lines.png" alt="envelope lines" className="popup-lines desktop-lines" />
            <img src="/images/contact-popup-lines-small.png" alt="envelope lines" className="popup-lines mobile-lines" />
            <img src="/images/stego.png" alt="logo" className="popup-logo" />
            <p>Your message was sent.</p>
            <button className="popup-back-button" onClick={() => setShowPopup(false)}>Back</button>
          </div>
        </div>
      )}

      <div className="contact-title-container green-card">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content-container">
        
        <div className="contact-form-container green-card">
          <h2>Roar into our inbox!</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" name="from_last_name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" name="reply_to" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea name="message" placeholder="Message" rows={isMobile ? 7 : 12} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {showErrorMessage && <p style={{ color: '#FF6347', marginTop: '5px' }}>{errorMessage}</p>}
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
                disabled={isSending || cooldown > 0 || !firstName || !lastName || !email || !message || !isChecked}
              >
                {isSending ? 'Sending...' : cooldown > 0 ? `${cooldown}s` : <>Send <FaArrowRightLong size="1.2rem" /></>}
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
