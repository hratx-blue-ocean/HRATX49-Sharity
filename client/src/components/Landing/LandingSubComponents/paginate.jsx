import React, { useState } from 'react';

const Paginater = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(event) => paginate(event, number)} href="" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Paginater;