import React, { useState } from "react";



const Pagination = ({ render, max }) => {


    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= max; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const Render = render;

    return (
        <>
            <h2>Pagination</h2>
            <div>
                <Render page={currentPage} />
                <div style={{ marginTop: '10px' }}>
                    {renderPaginationButtons()}
                </div>
            </div>
        </>
    );
};

export default Pagination;