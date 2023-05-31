import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { getProducts, selectPage } from "../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
import MyUser from "./perfil/MyUser";
import ShopingCart from "./perfil/ShopingCart";
import FavoritesCart from "./perfil/FavoritesCart";
// import Favs from "./PopUps/Favs/Favs";

function Header() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const queryParams = new URLSearchParams(window.location.search);

  const handleNavigate = () => {
    const cleanSearch = new URLSearchParams();
    cleanSearch.set("index", "0");

    navigate({
      pathname: "/",
      search: cleanSearch.toString(),
    });

    dispatch(getProducts());
    setTitle("");
    window.location.reload();
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(selectPage(0));
    queryParams.set("index", "0");
    queryParams.set("search", title);

    navigate({
      pathname: "/",
      search: queryParams.toString(),
    });
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
            <BsSearch />
          </button>
        </form>
        <nav className={styles.nav}>
          <FavoritesCart />

          <ShopingCart />

          <MyUser />
        </nav>
      </div>
    </header>
  );
}

export default Header;
