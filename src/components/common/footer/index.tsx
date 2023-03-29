import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/MEUEADFLIX.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="https://meueadflix.com"
          target={"blank"}
          className={styles.footerLink}
        >
          MEUEADFLIX.COM
        </a>
      </Container>
    </>
  );
};

export default Footer;
