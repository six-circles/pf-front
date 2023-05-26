import { useState, useEffect, useRef } from 'react';
import styles from './ShopingCart.module.scss';
import { useNavigate } from 'react-router';
// import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
// import Swal from "sweetalert2";
import { useSelector } from 'react-redux';
import FavoritosMenuDesplegable from '../../../pages/Favoritos/MenuDesplegable/FavoritosMenuDesplegable';

function FavoritesCart() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { favoritos } = useSelector((state: any) => state.favoritos);

  const navigate = useNavigate();
  const username: any = window.localStorage.getItem("user");
  let user;
  
  if (username) {
    user = JSON.parse(username);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  const handleLogin = () => {
    if (!username) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.buttonContainer} ref={buttonRef} onClick={handleLogin}>
      <div className={`${styles.button} ${isOpen ? styles.expanded : ''}`} onClick={handleClick}>
        <AiOutlineHeart className={styles.icons2} />
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          <FavoritosMenuDesplegable  />
        </div>
      )}
    </div>
  );
};

export default FavoritesCart;