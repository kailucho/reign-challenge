import React, { useEffect, useState } from "react";
import { FetchData } from "../../../helpers/apiHandler";
import { filterCompleteNews } from "../../../utils/filterCompleteNews";
import { timeSince } from "../../../utils/timeSince";

import FrameworkSelect from "../Atoms/Input/frameworkSelect";
import Card from "../Molecules/card";
import Pagination from "../Molecules/pagination";

function ListCards() {
  const [news, setnews] = useState([]);
  const [pageSelected, setpageSelected] = useState(0);
  const [frameworkSelected, setframeworkSelected] = useState("");

  useEffect(() => {
    async function getNews() {
      try {
        const response = await FetchData("search_by_date", "GET", {
          query: frameworkSelected,
          page: pageSelected,
        });
        setnews(filterCompleteNews(response.hits));
      } catch (error) {}
    }
    getNews();
  }, [frameworkSelected, pageSelected]);

  return (
    <div className="list-cards-container">
      <FrameworkSelect setframeworkSelected={setframeworkSelected} />
      <div className="list-cards">
        {news.map((news, index) => (
          <Card
            key={index}
            headerText={timeSince(news.created_at)}
            contentText={news.story_title}
          />
        ))}
      </div>
      <Pagination
        setpageSelected={setpageSelected}
        pageSelected={pageSelected}
      />
    </div>
  );
}
export default ListCards;
