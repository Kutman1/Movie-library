import React from 'react';
import Pagination from "react-js-pagination";

const PaginationComponent = (props) => {
return    <Pagination
        activePage={props.paginate}
        totalItemsCount={500}
        pageRangeDisplayed={3}
        onChange={props.handlePagination}
        itemClass="page-item"
        linkClass="page-link"
    />
};

export default PaginationComponent;