import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { Arrow, PaginationItem, PaginationList } from "./styles";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationList>
      <PaginationItem
        className={currentPage === 1 && "disabled"}
        onClick={onPrevious}
      >
        <Arrow left />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={pageNumber} className="dots">
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            className={pageNumber === currentPage && "selected"}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={currentPage === lastPage && "disabled"}
        onClick={onNext}
      >
        <Arrow right />
      </PaginationItem>
    </PaginationList>
  );
};

export default Pagination;
