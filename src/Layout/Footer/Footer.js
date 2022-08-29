import React from "react";
import Logo from "../../Assets/icons/Logo";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerCol}>
        <div className={classes.logoContainer}>
          <Logo />
          <p className={classes.brandName}>WhatsApp Clone</p>
        </div>
        <div className={classes.contactContainer}>
          <p className={classes.brandAddress}>
            2923 Coal Street, Bradford, PA, Pennsylvania
          </p>
          <a className={classes.contact} href="tel:+6494461709">
            Telephone number: 61709
          </a>

          <a className={classes.contact} href="mailto:someone@example.com">
            whatsapp@clone.com
          </a>
        </div>
      </div>
      <div className={classes.linkContainer}>
        <a href="#" className={classes.footerLink}>
          Legal Stuff
        </a>
      </div>
      <div className={classes.linkContainer}>
        <a href="#" className={classes.footerLink}>
          Privacy
        </a>
      </div>
      <div className={classes.linkContainer}>
        <a href="#" className={classes.footerLink}>
          Policy Security
        </a>
      </div>
    </footer>
  );
}

export default Footer;
