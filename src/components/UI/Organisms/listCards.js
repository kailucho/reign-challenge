import React from "react";

import FrameworkSelect from "../Atoms/Input/frameworkSelect";
import Card from "../Molecules/card";
const test = [
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
  {
    header: "2 hours ago by author",
    content: "Event-driven state management in React using Storeon",
  },
];

function ListCards() {
  return (
    <div className="list-cards-container">
      <FrameworkSelect />
      <div className="list-cards">
        {test.map((news) => (
          <Card headerText={news.header} contentText={news.content} />
        ))}
      </div>
    </div>
  );
}
export default ListCards;
