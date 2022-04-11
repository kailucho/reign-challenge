import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Card from "./card";
import { prettyDOM } from "@testing-library/dom";

test("When clicking on the row, a new tab should be open with the link of the post(story_url)", () => {
  const article = {
    isFavorite: true,
    created_at: "2022-04-10",
    author: "Luijhy Guerra",
    story_title: "Test Title",
    story_url: "https://github.com/",
  };
  const getNews = () => {};

  const { getByRole } = render(<Card article={article} getNews={getNews} />);
  const button = getByRole("link", { current: false });
  expect(button).toHaveAttribute("href", article.story_url);
});
