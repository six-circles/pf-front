import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../redux/actions/productActions.";

function Paginator({ setIndex, pages, page }: any) {
  const dispatch: Function = useDispatch();

  const handlePageClick = (event: any) => {
    const newIndex = event.selected * 12;
    dispatch(selectPage(event.selected));
    setIndex(newIndex);
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
