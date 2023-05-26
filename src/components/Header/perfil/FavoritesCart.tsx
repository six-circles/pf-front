<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import styles from "./ShopingCart.module.scss";
import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
// import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import FavoritosMenuDesplegable from "../../../pages/Favoritos/MenuDesplegable/FavoritosMenuDesplegable";
=======
import { useState, useEffect, useRef } from 'react';
import styles from './ShopingCart.module.scss';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
// import { CarritoPage } from '../..';
import FavoritosMenuDesplegable from '../../../pages/Favoritos/MenuDesplegable/FavoritosMenuDesplegable';
import { getFavorites } from '../../../redux/actions/favoritosActions';

interface Favorites {
  favoritos: object[];
}
interface State {
  favoritos: Favorites;
}
>>>>>>> develop

function FavoritesCart() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { favoritos } = useSelector((state: State) => state.favoritos);

  const dispatch: Function = useDispatch()
  const navigate = useNavigate();
  const username: any = window.localStorage.getItem("user");
<<<<<<< HEAD
  let user;

  if (username) {
    user = JSON.parse(username);
  }
=======

>>>>>>> develop

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getFavorites())
    const handleClose = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  const handleLogin = () => {
    if (!username) {
      navigate("/login");
    }
  };

  return (
    <div
      className={styles.buttonContainer}
      ref={buttonRef}
      onClick={handleLogin}
    >
      <div
        className={`${styles.button} ${isOpen ? styles.expanded : ""}`}
        onClick={handleClick}
      >
        <AiOutlineHeart className={styles.icons2} />
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
<<<<<<< HEAD
          <FavoritosMenuDesplegable />
=======
          <FavoritosMenuDesplegable datos={favoritos} setIsOpen={setIsOpen} />
>>>>>>> develop
        </div>
      )}
    </div>
  );
}

export default FavoritesCart;
<<<<<<< HEAD
=======





>>>>>>> develop
