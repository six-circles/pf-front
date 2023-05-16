import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/icons/logo.svg";
//agregarle validacion al "ingresa" si está ingresado salga un pop up -->ya estas ingresado
function Footer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_cont}>
        <div>
          <img src={logo} alt="SixCircles Logo" onClick={handleNavigate} />
          <p className={styles.letras}> 3298 Grant Street Longview</p>
          <p className={styles.letras}> TXUnited Kingdom 75601</p>
          <p className={styles.letras}> 1-202-555-0106 help@shopper.com</p>
        </div>
        <div>
          <h3 className={styles.subtitle}>Informacion</h3>
          <Link to="/aboutUs">Sobre Nosotros</Link>
        </div>
        <div>
          <h3 className={styles.subtitle}> Mi Cuenta</h3>
          <Link to="/user">Panel de control</Link>
          <Link to="/login">Ingresa</Link>
          <Link to="/user/create_product">Vender</Link>
        </div>
        <div>
          <h3 className={styles.subtitle}> Redes Sociales</h3>
          <a
            className={styles.letras}
            target="_blank"
            href="https://twitter.com/?lang=es"
          >
            Twitter
          </a>
          <a
            className={styles.letras}
            target="_blank"
            href="https://www.instagram.com/"
          >
            Instagram
          </a>
          <a
            className={styles.letras}
            target="_blank"
            href="https://es-la.facebook.com/"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
