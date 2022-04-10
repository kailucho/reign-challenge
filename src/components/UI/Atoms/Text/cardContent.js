import React from "react";
import PropTypes from "prop-types";

function CardContent({ text }) {
  return <div className="card-content">{text}</div>;
}
CardContent.defaultProps = {
  text: "",
};
CardContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardContent;
