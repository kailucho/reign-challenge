import React, { useEffect, useState } from "react";
import FrameworkSelect from "../Atoms/Input/frameworkSelect";
import Card from "../Molecules/card";
import Pagination from "../Molecules/pagination";
import { fetchNews } from "../../../helpers/apiHandler";

function ListAllCards({ tabSelected }) {
  const [news, setnews] = useState([]);
  const [pageSelected, setpageSelected] = useState(0);
  const [frameworkSelected, setframeworkSelected] = useState("");
  async function getNews() {
    try {
      const response = await fetchNews(
        "search_by_date",
        {
          query: frameworkSelected,
          page: pageSelected,
        },
        tabSelected
      );
      setnews(response);
    } catch (error) {}
  }
  useEffect(() => {
    getNews();
  }, [frameworkSelected, pageSelected, tabSelected]);
  return (
    <>
      {tabSelected === "All" && (
        <FrameworkSelect setframeworkSelected={setframeworkSelected} />
      )}
      <div className="list-cards">
        {news.map((newItem, index) => (
          <Card key={newItem.objectID} article={newItem} getNews={getNews} />
        ))}
      </div>
      <Pagination
        setpageSelected={setpageSelected}
        pageSelected={pageSelected}
      />
    </>
  );
}
export default ListAllCards;
