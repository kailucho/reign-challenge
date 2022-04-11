import React, { useState } from "react";

import Title from "../components/UI/Atoms/Title/title";
import ListAllCards from "../components/UI/Organisms/listAllCards";
import Tabs from "../components/UI/Molecules/tabs";
import { tabOptions } from "../types/types";
function ListNews() {
  const [tabSelected, settabSelected] = useState(tabOptions[0].text);
  return (
    <div>
      <Title text="HACKER NEWS" />
      <Tabs tabSelected={tabSelected} settabSelected={settabSelected} />
      <ListAllCards tabSelected={tabSelected} />
    </div>
  );
}

export default ListNews;
