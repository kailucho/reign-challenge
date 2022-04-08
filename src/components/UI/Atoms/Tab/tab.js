import React from "react";
import PropTypes from "prop-types";

function Tab({ text }) {
  return <div className="page-tab">{text}</div>;
}
Tab.defaultProps = {
  text: "",
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tab;
