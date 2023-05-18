import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/productActions.";

function Paginator({ items }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const dispatch: Function = useDispatch();

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  //   useEffect(() => {
  //     dispatch(getProducts(currentItems));
  //   });

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
    />
  );
}

export default Paginator;
