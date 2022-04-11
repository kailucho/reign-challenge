import React from "react";
import { tabOptions } from "../../../types/types";

import Tab from "../Atoms/Tab/tab";

function News({ tabSelected, settabSelected }) {
  return (
    <div className="page-tabs">
      {tabOptions.map((tab, index) => (
        <Tab
          key={index}
          text={tab.text}
          onClick={() => settabSelected(tab.text)}
          className={tabSelected === tab.text ? "tab-selected" : ""}
        />
      ))}
    </div>
  );
}
export default News;
