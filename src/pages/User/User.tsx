import CreateProduct from "../../components/User/CreateProduct/CreateProduct";
import styles from "./User.module.scss";
//CreateProduct el formulario para crear nuevo producto dentro de ventas---> user/ventas/crearprodct

function User() {
  return (
    <div className={styles.user}>
      <div>perfil usuario</div>
      <CreateProduct />
    </div>
  );
}

export default User;
