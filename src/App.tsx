import { Routes, Route } from "react-router-dom";
import {
  // CartPage,
  Detail,
  Home,
  Login,
  CreateUser,
  AboutUs,
  Compras,
  Datos,
  Preguntas,
  Ventas,
  Favoritos,
  Carrito,
  Success,
  Failure,
  Pending,
  Vendedor,
} from "./pages";
import { CreateProduct } from "./components";

import Layout from "./layout/Layout";
import LayoutUser from "./layout/LayoutUser";
import Admin from "./pages/User/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="cart" element={<CartPage />} /> */}
        <Route path="detail/:id" element={<Detail />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="detail/:name/:email" element={<Vendedor />} />
        <Route path="user/" element={<LayoutUser />}>
          <Route index element={<Datos />} />
          <Route path="products" element={<Ventas />} />
          <Route path="products/create_product" element={<CreateProduct />} />
          <Route path="shopping" element={<Compras />} />
          <Route path="qa" element={<Preguntas />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="admin" element={<Admin />} />

        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateUser />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="/pending" element={<Pending />} />
    </Routes>
  );
}

export default App;
