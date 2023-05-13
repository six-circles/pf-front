import styles from "./CreateProduct.module.scss";

export default function CreateProduct() {
  return (
    <form className={styles.form}>
      <h2>Crear Producto</h2>
      <div className={styles.form_camp}>
        <label>Nombre</label>
        <input placeholder="Nombre del producto" required />
      </div>
      <div className={styles.form_camp}>
        <label>Imagen</label>
        <input placeholder="Ingrese al menos una imagen" required />
      </div>
      <div className={styles.form_camp}>
        <label>Precio</label>
        <input
          type="number"
          placeholder="Precio de venta"
          required
          min={0}
          max={999999}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Stock</label>
        <input
          type="number"
          placeholder="¿Cuanto producto hay en stock?"
          required
          min={0}
          max={9999}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Calificacion</label>
        <input
          type="number"
          placeholder="Campo solo para desarrollo"
          required
          min={0}
          max={5}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Descricion</label>
        <textarea placeholder="Descripcion del producto"></textarea>
      </div>

      <button>Crear</button>
    </form>
  );
}
