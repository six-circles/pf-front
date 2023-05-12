import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <header className={styles.header}>
      <div className={styles.contHeader}>
        <img src={logo} alt="SixCircles Logo" onClick={handleNavigate} />
        <div className={styles.searchCont}>
          <input type="search" className={styles.searchbar} />
          <button className={styles.contButton}>
            <BsSearch className={styles.icon} />
          </button>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.letras}>
            <AiOutlineHeart className={styles.icons2} />
          </a>
          <a href="#" className={styles.letras}>
            <AiOutlineShoppingCart className={styles.icons2} />
          </a>
          <a href="#" className={styles.letras}>
            <MdOutlineAccountCircle className={styles.icons2} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
