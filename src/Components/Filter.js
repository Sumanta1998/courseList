import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <ul>
      <li>
        <button>Products &#9662;</button>
        <ul className="dropdown">
          <li>
            <button>Laptops</button>
          </li>
          <li>
            <button>Monitors</button>
          </li>
          <li>
            <button>Printers</button>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Filter;
