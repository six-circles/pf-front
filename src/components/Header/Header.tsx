import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { getProducts } from "../../redux/actions/productActions.";
import { useDispatch } from "react-redux";

function Header() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const handleNavigate = () => navigate("/");

  const handleChange = (event: any) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(getProducts(title));
  };

  return (
    <header className={styles.header}>
      <div className={styles.contHeader}>
        <img src={logo} alt="SixCircles Logo" onClick={handleNavigate} />
        <form className={styles.searchCont} onSubmit={handleSubmit}>
          <input
            type="search"
            className={styles.searchbar}
            placeholder="Buscar..."
            value={title}
            onChange={handleChange}
          />
          <button className={styles.contButton}>
            <BsSearch className={styles.icon} />
          </button>
        </form>
        <nav className={styles.nav}>
          <a href="#" className={styles.letras}>
            <AiOutlineHeart className={styles.icons2} />
          </a>
          <a href="#" className={styles.letras}>
            <AiOutlineShoppingCart className={styles.icons2} />
          </a>
          <a
            href="#"
            className={styles.letras}
            onClick={() => navigate("/user")}
          >
            <MdOutlineAccountCircle className={styles.icons2} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
