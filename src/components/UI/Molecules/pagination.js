import React, { useState } from "react";
import PropTypes from "prop-types";

import selectIcon from "../../../assets/images/selectIcon.png";

function Pagination({ pageSelected, setpageSelected }) {
  const [pagesStart, setpagesStart] = useState(1);
  const renderPages = () => {
    let temp = [];
    for (let i = (pagesStart - 1) * 9 + 1; i <= 9 * pagesStart; i++) {
      temp.push(
        <li
          key={i}
          onClick={() => setpageSelected(i - 1)}
          className={pageSelected === i - 1 ? "pagination-selected" : ""}
        >
          {i}
        </li>
      );
    }
    return temp;
  };
  const nextBlockPages = () => {
    setpagesStart(pagesStart + 1);
    setpageSelected(pagesStart * 9);
  };
  const prevBlockPages = () => {
    if (pagesStart > 1) {
      setpagesStart(pagesStart - 1);
      setpageSelected((pagesStart - 2) * 9);
    }
  };
  return (
    <ul className="pagination-container">
      <button className="pagination-button" onClick={() => prevBlockPages()}>
        <img
          src={selectIcon}
          className="pagination-start-icon"
          alt="start-icon"
        />
      </button>
      {renderPages()}
      <button className="pagination-button" onClick={() => nextBlockPages()}>
        <img src={selectIcon} className="pagination-end-icon" alt="end-icon" />
      </button>
    </ul>
  );
}
Pagination.defaultProps = {
  pageSelected: 1,
  setpageSelected: () => {},
};
Pagination.propTypes = {
  pageSelected: PropTypes.number,
  setpageSelected: PropTypes.func,
};
export default Pagination;
