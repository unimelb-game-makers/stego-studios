import { createFileRoute, Navigate } from "@tanstack/react-router";
import { getMember } from "@/data/teams";
import type { TeamName, MemberName } from "@/data/teams";
import { teams } from "@/data/teams";
import "@/styles/team.css";

export const Route = createFileRoute("/_layout/team/$team/$member")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { team, member } = Route.useParams();

  // const memberData = getMember(
  //   team as TeamName,
  //   member as MemberName<keyof typeof teams>,
  // );

  // if (!memberData) {
  //   return <Navigate to="/team" />;
  // }

  const memberData = {
    name: "James Conrad",
    skills: "Game Design, Level Design, System Design",
    contact: ["discord", "discord", "email"],
    description:
      "James Conrad is a senior game designer with over 10 years of experience. He is the creative force behind the game's mechanics and flow. He thrives on finding the sweet spot where strategy meets fun, shaping systems that challenge players without overwhelming them. With a love for puzzle-solving and world-building, James makes sure every feature connects to the bigger picture of the game. When he's not refining levels, he's usually testing new board games or sketching out his next big idea.",
    role: "Game Designer",
  };

  return (
    <div className="member-page-container">
      <div className="member-content-container">
        <div className="member-card">

        <div className="member-avatar-container">
          <div className="member-avatar" />
          <p className="member-role">{memberData.role}</p>
        </div>

        <div className="member-card-info">
          <h1>{memberData.name}</h1>
          <div className="member-details">
            <p>
              <strong>skills:</strong> {memberData.skills}
            </p>
            <div className="member-contact">
              <strong>contact:</strong>
              <a href="#" className="discord-contact-item">
                <img src="/images/discord_logo.png" alt="Discord" />
              </a>
              <a href="#" className="email-contact-item">
                <img src="/images/email_logo.png" alt="Email" />
              </a>
            </div>
            <p>
              <strong>personal note:</strong>
            </p>
          </div>
        </div>

        <div className="member-card-logo">
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
