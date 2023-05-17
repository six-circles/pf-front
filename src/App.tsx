import { Routes, Route } from "react-router-dom";
import { CartPage, Detail, Home, Login, CreateUser,AboutUs,Compras,Datos,Preguntas,Ventas } from "./pages";
import { CreateProduct } from "./components";

import Layout from "./layout/Layout";
import LayoutUser from "./layout/LayoutUser"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="user/" element={<LayoutUser/>}>
          <Route  index element={<Datos />} /> 
          <Route path="products" element={<Ventas/>} />
          <Route path="products/create_product" element={<CreateProduct />} />
          <Route path="shopping" element={<Compras/>} />
          <Route path="qa" element={<Preguntas/>} />
        </Route>
        {/* <Route path="user/ventas/create_product" element={<User />} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateUser />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
    </Routes>
  );
}

export default App;
