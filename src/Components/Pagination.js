import React from "react";

import "./Pagination.css";
function Pagination({
  coursePerPage,
  totalCourse,
  paginate,
  paginationStyle,
  setPaginationStyle,
}) {
  const pageNumbers = [];
  //   const [paginationStyle, setPaginationStyle] = useState(1);

  for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationChange = (number) => {
    paginate(number);
    setPaginationStyle(number);
    // currentPage == 1 ? setPaginationStyle(1): setPaginationStyle(number);
  };
  return (
    <div className="pagination">
      {/* <ul> */}
      {pageNumbers.map((number) => (
        //   <li key={number}>
        <button
          key={number}
          onClick={() => paginationChange(number)}
          className={paginationStyle === number ? "buttonStyle" : ""}
        >
          {number}
        </button>
        //   </li>
      ))}
      {/* </ul> */}
    </div>
  );
}

export default Pagination;
