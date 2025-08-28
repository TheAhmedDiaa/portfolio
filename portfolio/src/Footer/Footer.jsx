import lnkin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";

export default function Footer() {
  return (
    <footer className="footer bg-(--footer-background) rounded-t-2xl p-8 text-(--secondary-text)">
      <div id="contact" className="max-w-fit mx-auto my-4">
        <a href="https://www.linkedin.com/in/ahmeddiaaa" target="_blank">
          <img
            className="contact-links inline-block w-8 my-0 mx-4 transition-all duration-300 hover:-mt-2 hover:mx-8 hover:mb-4 hover:scale-200"
            src={lnkin}
          ></img>
        </a>
        <a href="https://wa.me/qr/QYYABGVLYFWUE1" target="_blank">
          <img
            className="contact-links inline-block w-8 my-0 mx-4 transition-all duration-300 hover:-mt-2 hover:mx-8 hover:mb-4 hover:scale-200"
            id="watsap"
            src={whatsapp}
          ></img>
        </a>
        <a href="mailto:theahmeddiaa@gmail.com" target="_blank">
          <img
            className="contact-links inline-block w-8 my-0 mx-4 transition-all duration-300 hover:-mt-2 hover:mx-8 hover:mb-4 hover:scale-200"
            id="gmail"
            src={gmail}
          ></img>
        </a>
        <a href="tel:+201157803789" target="_blank">
          <img
            className="contact-links inline-block w-8 my-0 mx-4 transition-all duration-300 hover:-mt-2 hover:mx-8 hover:mb-4 hover:scale-200"
            id="phone"
            src={phone}
          ></img>
        </a>
      </div>
      <hr />
      <p id="modified" className="flex justify-center pt-4">
        Last modified: July {new Date().getFullYear()}
      </p>
    </footer>
  );
}
