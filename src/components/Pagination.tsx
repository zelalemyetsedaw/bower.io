import React from 'react';

interface PaginationProps {
  totalPages: number;
  setPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, setPage, currentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`px-2 py-1 mx-1 ${currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
