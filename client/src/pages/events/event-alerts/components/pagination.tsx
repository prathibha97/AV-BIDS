import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-3">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                currentPage === number
                  ? "bg-primary text-white shadow-md"
                  : "border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300"
              } p-0 text-sm transition duration-150 ease-in-out`}
              onClick={() => onPageChange(number)}
              disabled={currentPage === number}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            aria-label="Next"
          >
            <span className="material-icons text-sm">
              <MdArrowForwardIos />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
