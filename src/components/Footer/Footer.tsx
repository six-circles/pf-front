import logo from "../../assets/icons/logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_cont}>
        <div>
          <img src={logo} alt="SixCircles Logo" />
          <p className={styles.letras}> 3298 Grant Street Longview</p>
          <p className={styles.letras}> TXUnited Kingdom 75601</p>
          <p className={styles.letras}> 1-202-555-0106 help@shopper.com</p>
        </div>
        <div>
          <h3 className={styles.subtitle}>Informacion</h3>
          <a className={styles.letras} href="http://...">
            Sobre Nosotros
          </a>
        </div>
        <div>
          <h3 className={styles.subtitle}> Mi Cuenta</h3>
          <a className={styles.letras} href="http://...">
            Panel de control
          </a>
          <a className={styles.letras} href="http://...">
            Ingresa
          </a>
          <a className={styles.letras} href="http://...">
            Vender
          </a>
        </div>
        <div>
          <h3 className={styles.subtitle}> Redes Sociales</h3>
          <a className={styles.letras} href="http://...">
            Twitter
          </a>
          <a className={styles.letras} href="http://...">
            Instagram
          </a>
          <a className={styles.letras} href="http://...">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
