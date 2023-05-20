import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";

function Paginator({ setIndex, pages }: any) {
  const handlePageClick = (event: any) => {
    // console.log(event.event.target.closest('li'));
    const newIndex = event.selected * 12;
    setIndex(newIndex);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={pages || 3}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
      containerClassName={styles.paginator}
      activeClassName={styles.active}
      pageClassName={styles.page}
      previousClassName={styles.prev}
      nextClassName={styles.next}
    />
  );
}

export default Paginator;
