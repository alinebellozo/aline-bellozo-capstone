import "./Footer.scss";
import InstagramLogo from "../../assets/icons/icon-instagram.svg";
import TwitterLogo from "../../assets/icons/icon-twitter.svg";
import LinkedinLogo from "../../assets/icons/linkedin-24.png";
import GitHubLogo from "../../assets/icons/github-mark-white.png";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <h2 className="footer__contact">Contact us</h2>
        <div className="footer__container">
          <div className="footer__contact-container">
            <h3 className="footer__email-contact">Email</h3>
            <address className="footer__email">
              <a className="footer__email-address" href="mailto:info@email.com">
                info@email.com
              </a>
            </address>
          </div>

          <div className="footer__social-container">
            <h3 className="footer__social">Social</h3>
            <nav className="footer__social-icons">
              <a
                className="footer__link"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src={InstagramLogo}
                  alt="Instragam Logo Icon"
                />
              </a>
              <a
                className="footer__link"
                href="https://www.twitter.com/"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src={TwitterLogo}
                  alt="Twitter Logo Icon"
                />
              </a>
              <a
                className="footer__link"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src={LinkedinLogo}
                  alt="LinkedIn Logo Icon"
                />
              </a>
              <a
                className="footer__link"
                href="https://www.github.com/"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src={GitHubLogo}
                  alt="GitHub Logo Icon"
                />
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
