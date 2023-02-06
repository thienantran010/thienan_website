import "../styles.css";

function FlipCard({ src, alt, children }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img" src={src} alt={alt} />
        </div>
        <div className="flip-card-back">{children}</div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="experiences">
      <div className="participation-section column">
        <h2>Here are some things I've done: </h2>
        <div className="cards">
          <FlipCard src="google-logo.webp" alt="google logo">
            <p> Google Software Product Sprint 2022 participant</p>
          </FlipCard>
          <FlipCard src="hack-mit-logo.png" alt="Hack MIT logo">
            <p> HackMIT 2022 Participant (received hoodie)</p>
          </FlipCard>
          <FlipCard src="h4i-logo.png" alt="Hack For Impact logo">
            <p>Hack 4 Impact Participant</p>
          </FlipCard>
        </div>
      </div>
      <div className="projects-section column">
        <h2>Here are some things I've made: </h2>
        <div className="cards">
          <FlipCard src="death-note.webp" alt="picture of death note">
            <p>Death Note (React.js) </p>
          </FlipCard>
          <FlipCard src="fire-emoji.png" alt="Fire emoji pic">
            <p>Yearbook (Jade, Express.js, MongoDB, Node.js) </p>
          </FlipCard>
          <FlipCard src="python-logo.png" alt="python logo">
            <p>Python game, browser automation</p>
          </FlipCard>
        </div>
      </div>
    </div>
  );
}
