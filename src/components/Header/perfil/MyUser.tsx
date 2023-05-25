import { useState, useEffect, useRef } from 'react';
import styles from './MyUser.module.scss';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import Swal from "sweetalert2";


function MyUser() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

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
  const handleLogout = () => {

    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.setItem("user", "");
        navigate("/login");
      }
    })
  };

  return (
    <div className={styles.buttonContainer} ref={buttonRef} onClick={handleLogin}>
      <div className={`${styles.button} ${isOpen ? styles.expanded : ''}`} onClick={handleClick}>
        <MdOutlineAccountCircle className={styles.icons2} />
        {!user?.user ? "Ingresar" : user?.user}
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          <Link to="/user"><div className={styles.option}>Mi Perfil</div></Link>
          <div className={styles.option} onClick={handleLogout}>Cerrar sesión</div>
        </div>
      )}
    </div>
  );
};

export default MyUser;
