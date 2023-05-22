import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../redux/actions/productActions.";
import { useNavigate, useLocation } from "react-router-dom";

function Paginator({ setIndex, pages, page }: any) {
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();

  const handlePageClick = (event: any) => {
    const newIndex = event.selected * 12;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("index", newIndex.toString())

    dispatch(selectPage(event.selected));
    setIndex(newIndex);
    navigate({ search: searchParams.toString() });
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={pages}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
      containerClassName={styles.paginator}
      activeClassName={styles.active}
      pageClassName={styles.page}
      previousClassName={styles.prev}
      nextClassName={styles.next}
      forcePage={page}
    />
  );
}

export default Paginator;
