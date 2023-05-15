import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Carrito from "./carrito/Carrito";
import User from "./perfil/User";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { getProducts } from "../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
// import Favs from "./PopUps/Favs/Favs";

function Header() {
  // const [showFavs, setShowFavs] = useState(true);
  const [title, setTitle] = useState("");
  const [showCarrito, setShowCarrito] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const username: any = window.localStorage.getItem("user");
  let user;
  if (username) {
    user = JSON.parse(username);
  }

  const handleNavigate = () => {
    navigate("/")
    dispatch(getProducts());
    setTitle("")
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleNavigate();
    dispatch(getProducts(title));
    navigate({
      pathname: '/',
      search: `?search=${title}`,
    })
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
          {/* <div style={{ position: "relative" }}> */}
          <a href="#" className={styles.letras}>
            <AiOutlineHeart className={styles.icons2} />
          </a>
          {/* {showFavs && <Favs />} */}
          {/* </div> */}

          <a href="#" className={styles.letras}>
            <AiOutlineShoppingCart className={styles.icons2} />
          </a>

          <a
            href="#"
            className={styles.letras}
            onClick={() => navigate("/user")}
          >
            <MdOutlineAccountCircle className={styles.icons2} />
            {!user?.user ? "Ingresar" : user?.user}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
