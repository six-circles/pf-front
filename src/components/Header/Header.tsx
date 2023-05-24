import { useNavigate, useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Carrito from "./carrito/MenuDespleg/Carrito";
import User from "./perfil/User";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { getProducts, selectPage } from "../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
import MyUser from "./perfil/MyUser";
import ShopingCart from "./perfil/ShopingCart";
// import Favs from "./PopUps/Favs/Favs";

function Header() {
  // const [showFavs, setShowFavs] = useState(true);
  const [title, setTitle] = useState("");
  const [showCarrito, setShowCarrito] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const queryParams = new URLSearchParams(window.location.search);
  // queryParams.toString();



  const handleNavigate = () => {
    const cleanSearch = new URLSearchParams();
    cleanSearch.set('index', '0');

    navigate({
      pathname: '/',
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(selectPage(0));
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
          <div style={{ position: "relative" }}>
            <a href="/user/favoritos" className={styles.letras}>
              <AiOutlineHeart className={styles.icons2} />
            </a>
            {/* {showFavs && <Favs />} */}
          </div>

          <ShopingCart />

          <MyUser />


        </nav>
      </div>
    </header>
  );
}

export default Header;
