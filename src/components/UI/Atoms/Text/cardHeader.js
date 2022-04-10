import React from "react";
import PropTypes from "prop-types";

function CardHeader({ text }) {
  return <div className="card-header-text">{text}</div>;
}
CardHeader.defaultProps = {
  text: "",
};

CardHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardHeader;
