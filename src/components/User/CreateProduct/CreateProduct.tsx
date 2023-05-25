import { useEffect, useState } from "react";
import styles from "./CreateProduct.module.scss";
import { checkAuth, getToken, urlAxios } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  getProductDetail,
} from "../../../redux/actions/productActions.";

import { DetailProd } from "../../../utils";

interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

function CreateProduct() {
  const initState = {
    condition: "",
    title: "",
    stock: 0,
    price: 0,
    moreCharacteristics: {},
    description: "",
    category: "",
  };

  const [form, setForm] = useState<any>(initState);
  const [image, setImage] = useState<File[] | any>([]);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const { detail } = useSelector((state: State) => state.products);
  const productParam = new URLSearchParams(window.location.search);
  const product = productParam.toString().split("=")[1];
  const formData = new FormData();

  useEffect(() => {}, [image]);

  useEffect(() => {
    dispatch(clearProducts());
    checkAuth("product", navigate);
    dispatch(getProductDetail(product));
  }, [dispatch, product, navigate]);

  useEffect(() => {
    const tempForm = { ...initState };

    if (detail && detail.title) {
      tempForm.title = detail.title;
      tempForm.stock = detail.stock;
      tempForm.price = detail.price;
      tempForm.description = detail.description;

      setForm({ ...form, ...tempForm });
    }
  }, [detail]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement | any>) => {
    const files = Array.from(event.target.files);

    if (files.length > 3) {
      alert("Se ha alcanzado el número máximo de imágenes permitido (3)");
      return;
    }

    // const selectedImages = Array.from(files);
    console.log(files);
    setImage(files);
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

    const { token, config } = getToken();

    for (let i = 0; i < image.length; i++) {
      formData.append("image1", image[i]);
    }

    const obj_post = {
      condition: form.condition,
      title: form.title,
      stock: Number(form.stock),
      price: Number(form.price),
      description: form.description,
      category: form.category,
      moreCharacteristics: form.moreCharacteristics,
      token,
    };

    const obj_put = {
      title: form.title,
      stock: Number(form.stock),
      price: Number(form.price),
      description: form.description,
    };

    console.log(obj_post);

    formData.append("data", JSON.stringify(obj_post));

    try {
      console.log(formData);
      const { data } = await urlAxios.post(
        "/pruebacloudinary",
        formData,
        config
      );

      // if (product) await urlAxios.patch(`/product/${product}`, obj_put, config);
      // else await urlAxios.post("/product", obj_post, config);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product ? "Producto Editado" : "Producto Creado"}`,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(data);
      setForm(initState);
      navigate("/user/products");
    } catch (error: any) {
      console.log(error.response.data);
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
    <>
      {detail && (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* <button onClick={() => navigate("/user/products")}>Volver</button> */}
          <h2>{!product ? "Crear Producto" : "Editar Producto"}</h2>
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
          {!product && (
            <>
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
                  type="file"
                  placeholder="Ingrese al menos una imagen"
                  required
                  accept="image/jpg, image/jpeg, image/png"
                  multiple={true}
                  name="image1"
                  onChange={handleAddImage}
                />
              </div>
              {/* <div className={styles.form_camp}>
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
              </div> */}

              <div className={styles.form_camp}>
                <p>Categoria</p>
                <select name="category" onChange={handleChange}>
                  <option value="">--- Seleccione una categoria ---</option>
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
            </>
          )}
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
          <button>{product ? "Guardar Cambios" : "Crear"}</button>
          <button
            className={styles.button_back}
            onClick={() => navigate("/user/products")}
          >
            Cancelar
          </button>
        </form>
      )}{" "}
    </>
  );
}

export default CreateProduct;
