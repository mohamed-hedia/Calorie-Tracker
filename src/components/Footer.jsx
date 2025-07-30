import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import styles from "../css/Footer.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <FiAtSign className={styles.atSymbol} />
          Mohammed Hedia ❤️ - {new Date().getFullYear()}
        </div>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/mohammed-hedia-842089258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mohamed-hedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:dev.mohamedhedia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
