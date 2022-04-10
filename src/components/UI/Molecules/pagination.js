import React from "react";
import selectIcon from "../../../assets/images/selectIcon.png";

function Pagination() {
  return (
    <ul className="pagination-container">
      <button className="pagination-button">
        <img
          src={selectIcon}
          className="pagination-start-icon"
          alt="start-icon"
        />
      </button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <button className="pagination-button">
        <img src={selectIcon} className="pagination-end-icon" alt="end-icon" />
      </button>
    </ul>
  );
}
export default Pagination;
