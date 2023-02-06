import "../styles.css";
import FadeInSection from "./FadeInSection.js";

export default function Resume() {
  return (
      <div className="resume">
        <FadeInSection>
          <h2>
            Want more information? Take a look at my resume.
          </h2>
        </FadeInSection>
        <a target="_blank" href="resume.pdf">Resume</a>
      </div>
  );
}
