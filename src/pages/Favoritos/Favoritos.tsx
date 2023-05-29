// import styles from "./Favoritos.module.scss"
import { useSelector } from "react-redux";
import { DetailProd } from "../../utils";
// import { getFavorites } from "../../redux/actions/favoritosActions";
// import { useDispatch } from "react-redux";
import { Products } from "../../components";
interface Products {
  favoritos: DetailProd;
}

interface State {
  favoritos: Products;
}
export default function () {
  // const dispatch=useDispatch()
  const { favoritos } = useSelector((state: State) => state.favoritos);

  return (
    <div>
      <h1>Mis favoritos</h1>
      <Products products={favoritos} />
    </div>
  );
}
