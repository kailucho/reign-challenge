import React from "react";
import PropTypes from "prop-types";

function Tab({ text, className, onClick }) {
  return (
    <div className={"page-tab " + className} onClick={onClick}>
      {text}
    </div>
  );
}
Tab.defaultProps = {
  text: "",
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tab;
