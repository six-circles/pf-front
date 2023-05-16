import { Routes, Route } from "react-router-dom";
import { CartPage, Detail, Home, Login, User, CreateUser,AboutUs } from "./pages";
import { CreateProduct } from "./components";

import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="user" element={<User />} /> 
        <Route path="user/products" element={"#"} />
        <Route path="user/products/create_product" element={<CreateProduct />} />
        <Route path="user/shopping" element={"#"} />
        <Route path="user/qa" element={"#"} />
        {/* <Route path="user/ventas/create_product" element={<User />} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateUser />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
    </Routes>
  );
}

export default App;
