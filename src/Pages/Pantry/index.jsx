import PantryCard from "../../Components/PantryCard/index";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pantry = () => {
  const items = [
    {
      name: "banana",
      quantity: "2",
    },

    {
      name: "maca",
      quantity: "2",
    },
    {
      name: "salt",
      quantity: "2",
    },
    {
      name: "apple",
      quantity: "2",
    },
    {
      name: "apple",
      quantity: "2",
    },
    {
      name: "apple",
      quantity: "2",
    },
    {
      name: "apple",
      quantity: "2",
    },
  ];

  const Items = ({ currentItems }) => {
    return (
      <div className="container">
        <div className="row">
          {currentItems &&
            currentItems.map((item) => (
              <div className="col-2">
                <PantryCard key={item} name={item.name} quantity={item.quantity} />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const PaginatedItems = ({ itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
    return (
      <div className="container  ">
        <Items currentItems={currentItems} />
        <div className="change_page d-flex justify-content-center ">
          <ReactPaginate
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <PaginatedItems itemsPerPage={6} />,
    </>
  );
};

export default Pantry;
