import React from "react";
import PropTypes from "prop-types";

import { tabOptions } from "../../../types/types";
import Text from "../Atoms/Text/text";

function Tabs({ tabSelected, settabSelected }) {
  return (
    <div className="page-tabs">
      {tabOptions.map((tab, index) => (
        <Text
          key={index}
          text={tab.text}
          onClick={() => settabSelected(tab.text)}
          className={
            "page-tab " + (tabSelected === tab.text ? "tab-selected" : "")
          }
          role="tab"
        />
      ))}
    </div>
  );
}
Tabs.defaultProps = {
  tabSelected: "",
  settabSelected: () => {},
};
Tabs.propTypes = {
  tabSelected: PropTypes.string,
  settabSelected: PropTypes.func,
};
export default Tabs;
