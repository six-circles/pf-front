import styles from "./Header.module.scss";
import {BsSearch} from "react-icons/bs"
import {MdOutlineAccountCircle} from "react-icons/md"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contHeader}>
        <h1 >SixCircles</h1>
        <div className={styles.searchCont}>
          <input type="search" className={styles.searchbar}/>
          <button className={styles.contButton}><BsSearch className={styles.icon}/></button>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.letras}><AiOutlineHeart className={styles.icons2}/></a>
          <a href="#" className={styles.letras}><AiOutlineShoppingCart className={styles.icons2}/></a>
          <a href="#" className={styles.letras}><MdOutlineAccountCircle className={styles.icons2}/></a>

        </nav>
      </div>
    </header>
  );
}

export default Header;
