import React, { useState } from "react";
import reactIcon from "../../../../assets/images/reactIcon.png";
import angularIcon from "../../../../assets/images/angularIcon.png";
import vueIcon from "../../../../assets/images/vueIcon.png";
import selectIcon from "../../../../assets/images/selectIcon.png";
import {
  setInLocalStorage,
  getFromLocalStorage,
} from "../../../../utils/localStorage";

const Frameworks = [
  { name: "React", icon: reactIcon, value: "reactjs" },
  { name: "Angular", icon: angularIcon, value: "angular" },
  { name: "Vue", icon: vueIcon, value: "vuejs" },
];
const frameworkSelected = getFromLocalStorage("frameworkSelected");
const FrameworkSelect = ({ setframeworkSelected }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [framework, setFramework] = useState(
    frameworkSelected ? frameworkSelected.name : ""
  );
  const handleSelected = (item) => {
    setframeworkSelected(item.value);
    setFramework(item.name);
    setShowOptions(false);
    setInLocalStorage("frameworkSelected", item);
  };
  return (
    <div className="select-container">
      <div
        className={"select-field"}
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        <span className={"select-text"}>{framework || "Select your news"}</span>
        <img
          className={`select-icon ${showOptions ? "select-icon-rotated" : ""}`}
          src={selectIcon}
          alt="select-icon"
        />
      </div>
      <ul
        className={`${"select-conainer-option"} ${
          showOptions ? "select-list-option" : ""
        }`}
        onMouseLeave={() => setShowOptions(false)}
      >
        {Frameworks.map((framework, index) => (
          <li
            key={index}
            className={"select-option"}
            onClick={() => handleSelected(framework)}
          >
            <img
              className="select-option-icon"
              src={framework.icon}
              alt={framework.name}
            ></img>
            <span>{framework.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkSelect;
