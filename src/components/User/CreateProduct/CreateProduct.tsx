import { useEffect, useState } from "react";
import styles from "./CreateProduct.module.scss";
import { checkAuth, urlAxios } from "../../../utils";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth("product", navigate);
  });

  const [form, setForm] = useState({
    title: "",
    image1: "",
    image2: "",
    image3: "",
    stock: 0,
    price: 0,
    description: "",
    punctuation: 0,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: any = window.localStorage.getItem("user");
    let id;
    let config;

    if (!user) {
      id = "";
      config = {
        headers: { _id: id },
      };
    } else {
      id = JSON.parse(user);
      config = {
        headers: { _id: id.id },
      };
    }

    const obj = {
      title: form.title,
      image: [form.image1, form.image2, form.image3],
      stock: Number(form.stock),
      price: Number(form.price),
      description: form.description,
      userId: id.id,
    };

    try {
      await urlAxios.post("/product", obj, config);
      alert("Objeto Creado");
      setForm({
        title: "",
        image1: "",
        image2: "",
        image3: "",
        stock: 0,
        price: 0,
        description: "",
        punctuation: 0,
      });
      navigate("/");
    } catch (error: any) {
      if (!error.response.data.error) {
        alert(error.response.data);
      } else {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button onClick={() => navigate("/user")}>Volver a perfil</button>
      <h2>Crear Producto</h2>
      <div className={styles.form_camp}>
        <label>Nombre</label>
        <input
          placeholder="Nombre del producto"
          required
          value={form.title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Imagen 1</label>
        <input
          placeholder="Ingrese al menos una imagen"
          required
          value={form.image1}
          name="image1"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Imagen 2</label>
        <input
          placeholder="Ingrese al menos una imagen"
          required
          value={form.image2}
          name="image2"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Imagen 3</label>
        <input
          placeholder="Ingrese al menos una imagen"
          required
          value={form.image3}
          name="image3"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Precio</label>
        <input
          type="number"
          placeholder="Precio de venta"
          required
          min={0}
          max={999999}
          value={form.price}
          name="price"
          onChange={handleChange}
          step=".01"
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
          name="stock"
          value={form.stock}
          onChange={handleChange}
        />
      </div>
      {/* <div className={styles.form_camp}>
        <label>Calificacion</label>
        <input
          type="number"
          placeholder="Campo solo para desarrollo"
          required
          min={0}
          max={5}
          name="punctuation"
          step="0.1"
          value={form.punctuation}
          onChange={handleChange}
        />
      </div> */}
      <div className={styles.form_camp}>
        <label>Descripcion</label>
        <textarea
          placeholder="Descripcion del producto"
          name="description"
          value={form.description}
          required
          onChange={handleChange}
        ></textarea>
      </div>
      <button>Crear</button>
    </form>
  );
}
