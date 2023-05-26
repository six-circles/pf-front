import styles from "./CarritoPage.module.scss";
import { urlAxios } from "../../utils";
import { getToken } from "../../utils/index";
import { getCartProducts } from "../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getProducts } from "../../redux/actions/productActions.";

export default function (props: any) {
  const dispatch: Function = useDispatch();
  const user = getToken();
  const token = user.token;
  const prod = props.producto;
  const id = props.producto._id;
  const navigate = useNavigate();
  const deleteProduct = async () => {
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
          await urlAxios.delete(`${token}/shoppingCart/${id}`);
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
  const details = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const name = prod.title;
  const cant = prod.cantidadCarrito;
  const image = prod?.image[0]?.url;

  let cantidad = 1;
  const product = {
    productsId: id,
    token,
    cantidad: cantidad,
  };
  const addCarrito = async () => {
    if (cant < prod.stock) {
      product.cantidad = 1;
      await SendCarrito();
    } else {
      Swal.fire({
        position: "top-right",
        icon: "warning",
        title: "No hay mas stock",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const deleteCarrito = async () => {
    product.cantidad = -1;
    await SendCarrito();
  };

  const SendCarrito = async () => {
    try {
      await urlAxios.post("/user/shoppingCart", product);
      dispatch(getCartProducts());

      // Swal.fire({
      //   position: "center",
      //   icon:"success",
      //   title: "actualizado con éxito",
      //   showConfirmButton: false,
      //   timer: 1000,
      // })
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No se pudo añadir",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div>
      {prod ? (
        <div className={styles.card}>
          <img src={image} alt={prod.title} className={styles.img} />
          <p className={styles.title}>{name}</p>
          <p className={styles.precio}>${prod.price}</p>

          <div className={styles.cantidad}>
            <label>Cantidad</label>
            <button className={styles.buttonMenos} onClick={deleteCarrito}>
              {" "}
              -{" "}
            </button>
            <p>{cant}</p>
            <button onClick={addCarrito} className={styles.buttonMenos}>
              {" "}
              +{" "}
            </button>
          </div>
          <button onClick={() => details(id)} className={styles.buttonDetails}>
            Detalles
          </button>
          <button className={styles.buttonEliminar} onClick={deleteProduct}>
            X
          </button>
        </div>
      ) : (
        <h3>No hay productos aún...</h3>
      )}
    </div>
  );
}
