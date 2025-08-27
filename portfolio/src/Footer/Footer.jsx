import "./Footer.css";
import lnkin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div id="contact">
        <a href="https://www.linkedin.com/in/ahmeddiaaa" target="_blank">
          <img className="contact-links" src={lnkin}></img>
        </a>
        <a href="https://wa.me/qr/QYYABGVLYFWUE1" target="_blank">
          <img className="contact-links" id="watsap" src={whatsapp}></img>
        </a>
        <a href="mailto:theahmeddiaa@gmail.com" target="_blank">
          <img className="contact-links" id="gmail" src={gmail}></img>
        </a>
        <a href="tel:+201157803789" target="_blank">
          <img className="contact-links" id="phone" src={phone}></img>
        </a>
      </div>
      <hr />
      <p id="modified">Last modified: July {new Date().getFullYear()}</p>
    </footer>
  );
}
