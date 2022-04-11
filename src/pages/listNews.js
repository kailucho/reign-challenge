import React from "react";

import Title from "../components/UI/Atoms/Title/title";
import Tabs from "../components/UI/Molecules/tabs";
import ListCards from "../components/UI/Organisms/listCards";
function ListNews() {
  return (
    <div>
      <Title text="HACKER NEWS" />
      <Tabs />
      <ListCards />
    </div>
  );
}

export default ListNews;
