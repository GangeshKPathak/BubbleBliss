import React from "react";
import { ProductCard } from "./ProductCard";
import { useAPI, useProducts } from "../../Contexts";
import { notFound } from "../../Assests";

export const ProductListing = () => {
  const { isLoading } = useAPI();
  const { paginatedData, totalPages, currentPage, setCurrentPage } =
    useProducts();

  console.log(paginatedData, totalPages, currentPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="products">
      {paginatedData?.length === 0 && !isLoading ? (
        <div className="products-not-found">
          <img src={notFound} alt="Products Not Found" />
          <h1>Products not Found.</h1>
        </div>
      ) : (
        <>
          {paginatedData?.map((item) => (
            <div className="productCard" key={item._id}>
              <ProductCard item={item} />
            </div>
          ))}
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};
