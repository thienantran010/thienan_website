import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thienan-tran-35176620b/"><FontAwesomeIcon className="contact" icon={faLinkedin} color="white" /></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/thienantran010"><FontAwesomeIcon className="contact" icon={faGithub} color="white" /></a>
      <div className="email-container">ttran010@bu.edu</div>
    </footer>
  )
}