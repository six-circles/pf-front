import styles from "./CarritoPage.module.scss";
import { Fragment } from "react";
import { urlAxios } from "../../utils";
import { getToken } from "../../utils/index";
import { getCartProducts } from "../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function (props: any) {
  const dispatch: Function = useDispatch();
  const user = getToken();
  const token = user.token;
  const prod = props.producto;
  const id = props.producto._id;
  const enable = props.producto.enable;
  const stock = props.producto.stock;
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
    <Fragment>
      {prod ? (
        <div className={styles.card}>
          <div className={styles.card_image}>
            <img src={image} alt={prod.title} className={styles.img} />
          </div>
          <div className={styles.card_info}>
            <h4 className={styles.title}>{name}</h4>
            <div>
              {enable === false || stock === 0 ? (
                <p>Producto no disponible</p>
              ) : null}
            </div>
            <div className={styles.card_info_btn}>
              <p className={styles.info_eliminar} onClick={deleteProduct}>
                Eliminar
              </p>
              {enable === false || stock === 0 ? (
                <p className={styles.info_detailDesabled}>Detalles</p>
              ) : (
                <p onClick={() => details(id)} className={styles.info_detail}>
                  Detalles
                </p>
              )}
            </div>
          </div>

          <div className={styles.cont_cantidad}>
            <div className={styles.card_cantidad}>
              {enable === false || stock === 0 ? (
                <button disabled className={styles.buttonDisabled}>
                  -
                </button>
              ) : (
                <button
                  onClick={deleteCarrito}
                  className={styles.buttonEnabled}
                >
                  -
                </button>
              )}
              {enable === false || stock === 0 ? <p>0</p> : <p>{cant}</p>}
              {enable === false || stock === 0 ? (
                <button disabled className={styles.buttonDisabled}>
                  +
                </button>
              ) : (
                <button onClick={addCarrito} className={styles.buttonEnabled}>
                  +
                </button>
              )}
            </div>
            {enable === false || stock === 0 ? (
              <p className={styles.stock}>0 en Stock</p>
            ) : (
              <p>{prod.stock} en Stock</p>
            )}
          </div>

          {enable === false || stock === 0 ? (
            <div className={styles.priceDisabled}>
              <p>${prod.price}</p>
            </div>
          ) : (
            <div className={styles.precio}>
              <p>${prod.price}</p>
            </div>
          )}
        </div>
      ) : (
        <h3>No hay productos aún...</h3>
      )}
    </Fragment>
  );
}
