import React from "react";
import PropTypes from "prop-types";

function Text({ text, className, onClick, role }) {
  return (
    <div className={className} onClick={onClick} role={role}>
      {text}
    </div>
  );
}
Text.defaultProps = {
  text: "",
};
Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Text;
