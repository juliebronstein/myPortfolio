import { links, socials } from "./Fdata";
import "./Footer.css";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <ul className="nav__menu">
            {links.map((fLink) => (
              <li key={fLink.id}>
                <a href={fLink.link}>{fLink.title}</a>
              </li>
            ))}
          </ul>
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.id} href={social.link} target="_blank">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__copyright">
          <small>&copy; 2023-25 Geeky Prashant | All Rights Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
