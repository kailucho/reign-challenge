import React from "react";
import PropTypes from "prop-types";
import CardHeader from "../Atoms/Text/cardHeader";
import CardContent from "../Atoms/Text/cardContent";
import timeIcon from "../../../assets/images/timeIcon.png";
import heartIcon from "../../../assets/images/heartIcon.png";
import fullHeartIcon from "../../../assets/images/fullHeartIcon.png";

function Card({ headerText, contentText }) {
  return (
    <div className="card-container">
      <span className="card-body-text">
        <div className="card-header">
          <img className="card-icon-time" src={timeIcon} alt="timeIcon" />
          <CardHeader text={headerText} />
        </div>
        <CardContent text={contentText} />
      </span>
      <button className="card-icon-heart-container">
        <img className="card-icon-heart" src={heartIcon} alt="heartIcon" />
      </button>
    </div>
  );
}
Card.defaultProps = {
  text: "",
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
