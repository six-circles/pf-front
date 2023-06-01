import { useState, useEffect, useRef } from 'react';
import styles from './ShopingCart.module.scss';
import { useNavigate } from 'react-router';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import CarritoLight from '../../../pages/Carrito/MenuDesplegable/CarritoLight';

function ShopingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { cartProducts } = useSelector((state: any) => state.carrito);

  const navigate = useNavigate();
  const username: any = window.localStorage.getItem("user");

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
  }, [cartProducts]);

  const handleLogin = () => {
    if (!username) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.buttonContainer} ref={buttonRef} onClick={handleLogin}>
      <div className={`${styles.button} ${isOpen ? styles.expanded : ''}`} onClick={handleClick}>
        <AiOutlineShoppingCart className={styles.icons2} />
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          <CarritoLight datos={cartProducts} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default ShopingCart;





