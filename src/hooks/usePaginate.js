import { useState } from "react";

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        handlePageChange,
    };
};

export default usePagination;
