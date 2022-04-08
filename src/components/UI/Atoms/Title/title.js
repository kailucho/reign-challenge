import React from "react";
import PropTypes from "prop-types";

function Title({ text }) {
  return <div className="page-title">{text}</div>;
}
Title.defaultProps = {
  text: "",
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
