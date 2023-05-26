import { useSelector } from "react-redux";
import { DetailProd } from "../../utils";
import { urlAxios } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "../../components";
interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

export default function () {
  const { detail } = useSelector((state: State) => state.products);
  const user = detail.user;
  const email = user?.email;
  const [allProducts, setAllProducts] = useState([]);
  const getAllProd = async () => {
    const { data } = await urlAxios(`/user?email=${email}`);
    const products = data?.products;
    setAllProducts(products);
  };
  useEffect(() => {
    getAllProd();
  }, []);
  return (
    <div>
      <div>
        {allProducts ? (
          <Products products={allProducts} />
        ) : (
          <p>"el vendedor no tiene productos publicados"</p>
        )}
      </div>
    </div>
  );
}
