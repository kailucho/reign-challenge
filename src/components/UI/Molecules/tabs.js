import React from "react";

import Tab from "../Atoms/Tab/tab";

function News() {
  return (
    <div className="page-tabs">
      <Tab text="All" />
      <Tab text="My faves" />
    </div>
  );
}
export default News;
