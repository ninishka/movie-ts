import React from "react";
import { PaginationContainer, PageButton } from "./styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Previous
      </PageButton>
      <span>Page {currentPage} of {totalPages}</span>
      <PageButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;