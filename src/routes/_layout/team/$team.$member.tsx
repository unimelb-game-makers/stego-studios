import { createFileRoute, Navigate } from "@tanstack/react-router";
import { getMember } from "@/data/teams";
import "@/styles/team.css";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/_layout/team/$team/$member")({
  component: RouteComponent,
});

function RouteComponent() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isColliding, setIsColliding] = useState(false);

  // Check for logo-name overlap, hide logo on overlap
  useEffect(() => {
    const checkCollision = () => {
      if (nameRef.current && logoRef.current) {
        const nameRect = nameRef.current.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();

        setIsColliding(nameRect.right > logoRect.left);
      }
    };

    checkCollision();
    window.addEventListener("resize", checkCollision);

    return () => {
      window.removeEventListener("resize", checkCollision);
    };
  }, []);

  const { team, member } = Route.useParams();

  const memberData = getMember(team, member);

  if (!memberData) {
    return <Navigate to="/team" />;
  }

  const contacts = memberData.contact.reduce(
    (acc, contact) => {
      acc[contact.type] = contact.content;
      return acc;
    },
    {} as Record<"discord" | "email" | "linkedin" | "personal", string | undefined>,
  );

  return (
    <div className="member-page-container">
      <div className="member-content-container">
        <div className="member-card">

        <div className="member-avatar-container">
          <div className="member-avatar" />
          <h1 className="mobile-name">{memberData.name}</h1>
          <p className="member-role">{memberData.role}</p>
        </div>

        <div className="member-card-info">
          <h1 ref={nameRef} className="desktop-name">
            {memberData.name}
          </h1>
          <div className="member-details">
            <div className="member-skills">
              <strong>skills:</strong>
              <div className="skills-container">
                {memberData.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="member-contact">
              <strong>contact:</strong>
              <div className="contact-icons">
                {contacts.discord && (
                  <a
                    href={contacts.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-contact-item"
                  >
                    <img src="/images/discord_logo.png" alt="Discord" />
                  </a>
                )}
                {contacts.email && (
                  <a
                    href={`mailto:${contacts.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="big-contact-item"
                  >
                    <img src="/images/email_logo.png" alt="Email" />
                  </a>
                )}
                {contacts.linkedin && (
                  <a
                    href={contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-contact-item"
                  >
                    <img src="/images/linkedIn_logo.png" alt="linkedIn" />
                  </a>
                )}
                {contacts.personal && (
                  <a
                    href={contacts.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="big-contact-item"
                  >
                    <img src="/images/www_logo.png" alt="www" />
                  </a>
                )}
              </div>
            </div>
            <p className="personal-note">
              <strong>personal note:</strong> {memberData.personalNote}
            </p>
          </div>
        </div>

        <div
          ref={logoRef}
          className="member-card-logo"
          style={{ opacity: isColliding ? 0 : 1 }}
        >
          <img src="/images/stego.png" alt="icon" />
        </div>
      </div>

      <div className="member-description">
        <p>{memberData.description}</p>
      </div>
      </div>
    </div>
  );
}
