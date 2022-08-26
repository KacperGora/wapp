import React from "react";
import Logo from "../../Assets/icons/Logo";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerCol">
        <div className="logoContainer">
          <Logo />
          <p className="brandName">WhatsApp Clone</p>
        </div>
        <div className="contactContainer">
          <p className="brandAddress">
            2923 Coal Street, Bradford, PA, Pennsylvania
          </p>
          <a className="contact" href="tel:+6494461709">
            Telephone number: 61709
          </a>

          <a className="contact" href="mailto:someone@example.com">
            whatsapp@clone.com
          </a>
        </div>
      </div>
      <div className="linkContainer">
        <a href="#" className="footerLink">
          Legal Stuff
        </a>
      </div>
      <div className="linkContainer">
        <a href="#" className="footerLink">
          Privacy
        </a>
      </div>
      <div className="linkContainer">
        <a href="#" className="footerLink">
          Policy Security
        </a>
      </div>
    </footer>
  );
}

export default Footer;
