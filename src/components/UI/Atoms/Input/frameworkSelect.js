import React, { useState } from "react";
import reactIcon from "../../../../assets/images/reactIcon.png";
import angularIcon from "../../../../assets/images/angularIcon.png";
import vueIcon from "../../../../assets/images/vueIcon.png";
import selectIcon from "../../../../assets/images/selectIcon.png";

const Frameworks = [
  { name: "React", icon: reactIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Vue", icon: vueIcon },
];

const FrameworkSelect = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [framework, setFramework] = useState("");
  const handleSelected = (selected) => {
    setFramework(selected);
    setShowOptions(false);
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
        {Frameworks.map((framework) => (
          <li className={"select-option"} onClick={() => {}}>
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
