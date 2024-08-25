'use client'

import { useState } from 'react';
import styles from '@/app/Pagination.module.css';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${currentPage === i ? styles.active : ''}`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.arrow}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &larr;
      </button>
      <div className={styles.pageNumbers}>
        {currentPage > 3 && <span>...</span>}
        {renderPageNumbers().slice(
          Math.max(currentPage - 2, 0),
          Math.min(currentPage + 1, totalPages)
        )}
        {currentPage < totalPages - 2 && <span>...</span>}
      </div>
      <button
        className={styles.arrow}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
