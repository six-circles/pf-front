import { useEffect, useState } from "react";
import styles from "./CreateProduct.module.scss";
import { checkAuth, urlAxios } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateProduct() {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth("product", navigate);
  });

  const [form, setForm] = useState<any>({
    title: "",
    image1: "",
    image2: "",
    image3: "",
    stock: 0,
    price: 0,
    category: "",
    condition: "",
    description: "",
    punctuation: 0,
    moreCharacteristics: {},
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleChars = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setForm((prevForm: any) => {
      const { moreCharacteristics } = prevForm;

      const updatedCharacteristics = {
        ...moreCharacteristics,
        [name]: checked
          ? [...(moreCharacteristics[name] || []), value]
          : moreCharacteristics[name].filter((item: string) => item !== value),
      };

      return {
        ...prevForm,
        moreCharacteristics: updatedCharacteristics,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: any = window.localStorage.getItem("user");

    let token;
    let config;

    if (!user) {
      token = "";
      config = {
        headers: { token },
      };
    } else {
      token = JSON.parse(user).token;
      config = {
        headers: { token },
      };
    }

    const obj = {
      condition: form.condition,
      title: form.title,
      image: [form.image1, form.image2, form.image3],
      stock: Number(form.stock),
      price: Number(form.price),
      description: form.description,
      category: form.category,
      moreCharacteristics: form.moreCharacteristics,
      token,
    };

    console.log(obj);

    try {
      await urlAxios.post("/product", obj, config);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto creado",
        showConfirmButton: false,
        timer: 1500,
      });
      setForm({
        condition: "",
        title: "",
        image1: "",
        image2: "",
        image3: "",
        stock: 0,
        price: 0,
        moreCharacteristics: {},
        description: "",
        punctuation: 0,
        category: "",
      });
      navigate("/");
    } catch (error: any) {
      if (!error.response.data.error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
        });
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
        <label>Estado</label>
        <div className={styles.form_camp_cond}>
          <div>
            <input
              type="radio"
              value="Nuevo"
              name="condition"
              onChange={handleChange}
            />
            <label htmlFor="nuevo">Nuevo</label>
          </div>
          <div>
            <input
              type="radio"
              value="Usado"
              name="condition"
              onChange={handleChange}
            />
            <label htmlFor="usado">Usado</label>
          </div>
        </div>
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
          value={form.image2}
          name="image2"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_camp}>
        <label>Imagen 3</label>
        <input
          placeholder="Ingrese al menos una imagen"
          value={form.image3}
          name="image3"
          onChange={handleChange}
        />
      </div>

      <div className={styles.form_camp}>
        <p>Categoria</p>
        <select name="category" onChange={handleChange}>
          <option disabled selected={true}>
            --- Seleccione una categoria ---
          </option>
          <option value="Technology">Tecnologia</option>
          <option value="Indumentary">Ropa</option>
          <option value="Furniture">Muebles</option>
          <option value="Others">Otros</option>
        </select>
      </div>

      <div className={styles.form_camp}>
        <p>Caracteristicas</p>
        <label htmlFor="colors">Color</label>
        <div className={styles.form_camp_chars}>
          <div className="camp_chars">
            <input
              type="checkbox"
              value="red"
              name="color"
              onChange={handleChars}
            />
            <label>Rojo</label>
          </div>
          <div className="camp_chars">
            <input
              type="checkbox"
              value="blue"
              onChange={handleChars}
              name="color"
            />
            <label>Azul</label>
          </div>
          <div className="camp_chars">
            <input
              type="checkbox"
              value="black"
              name="color"
              onChange={handleChars}
            />
            <label>Negro</label>
          </div>
          <div className="camp_chars">
            <input
              type="checkbox"
              value="white"
              name="color"
              onChange={handleChars}
            />
            <label>Blanco</label>
          </div>
          <div className="camp_chars">
            <input
              type="checkbox"
              value="green"
              name="color"
              onChange={handleChars}
            />
            <label>Verde</label>
          </div>
        </div>
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
