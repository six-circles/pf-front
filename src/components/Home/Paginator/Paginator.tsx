import ReactPaginate from "react-paginate";

import styles from "./Paginator.module.scss";

function Paginator(props: any) {
  const handlePageClick = (event: any) => {
    // console.log(event.target);
    const newStart = event.selected * props.itemsPerPage;
    if (newStart === 0) props.setIndex1(newStart + 1);
    else props.setIndex1(newStart);
    props.setIndex2(newStart + props.itemsPerPage);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={3}
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
