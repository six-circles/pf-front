import { Routes, Route } from "react-router-dom";
import { CartPage, Detail, Home, Login,User} from "./pages";

import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path="cart" element={<CartPage />} />
        <Route index path="detail/:id" element={<Detail />} />
        <Route path="user" element={<User />} />
        <Route path="user/ventas/create_product" element={<User />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
