import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { urlAxios } from "../../../utils";
import { getToken } from "../../../utils/index";
import { getCartProducts } from "../../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./CarritoLight.module.scss";

export default function CarritoLight({ datos, setIsOpen }: any) {
  const dispatch: Function = useDispatch();
  const user = getToken();
  const token = user.token;
  const navigate = useNavigate();

  const deleteProduct = async (productId: string) => {
    try {
      Swal.fire({
        title: "¿Desea borrar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await urlAxios.delete(`${token}/shoppingCart/${productId}`);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto eliminado",
            showConfirmButton: false,
            timer: 2000,
          });
          dispatch(getCartProducts());
        }
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleCarrito = () => {
    navigate("/carrito");
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contCard}>
        {datos.length > 0 ? datos.slice(0, 3).map((product: any) => (
          <div key={product._id}>
            <div className={styles.card}>
              <Link to={`/detail/${product._id}`} className={styles.img}>
                <img
                  src={product.image[0].url}
                  alt={product.title.slice(0, 20)}
                />
              </Link>
              <div className={styles.info}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.precio}>${product.price * product.cantidadCarrito}</p>
                <p>Cantidad: {product.cantidadCarrito}</p>
                <p className={styles.buttonEliminar} onClick={() => deleteProduct(product._id)}>Eliminar</p>
              </div>
            </div>
            <hr />
          </div>
        )) : <div className={styles.contCard1}> <p className={styles.aviso}>Nada por aquí. <br />Agrega productos a tu carrito ...</p></div>}
        {datos.length > 3 && (
          <div className={styles.dots}>
            <p>.<br />.<br />.</p>
          </div>
        )}
        <div onClick={handleCarrito} className={styles.option2}>
          Ver todo mi carrito
        </div>
      </div>
    </div >
  );
}
