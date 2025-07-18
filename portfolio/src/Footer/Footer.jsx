import "./Footer.css";
import lnkin from "../assets/linkedin.svg"
import whatsapp from "../assets/whatsapp.svg"
import gmail from "../assets/gmail.svg"
import phone from "../assets/phone.svg" 

export default function Footer() {
  return (
    <footer className="footer">
      <div id="contacts">
      
      <a href="https://www.linkedin.com/in/ahmeddiaaa">
        <img className="contact" src={lnkin}></img>
      </a>
      <a href="https://wa.me/qr/ZVZYBOBLAZJGI1">
        <img className="contact" id="watsap" src={whatsapp}></img>
      </a>
      <a href="mailto:diaaa625@gmail.com">
        <img className="contact" id="gmail" src={gmail}></img>
      </a>
      <a href="tel:+201093797637">
        <img className="contact" id="phone" src={phone}></img>
      </a>
      </div>
      <hr />
      <p id="modified">Last modified: {new Date().getMonth() + 1}/{new Date().getFullYear()}</p>
    </footer>
  );
}
