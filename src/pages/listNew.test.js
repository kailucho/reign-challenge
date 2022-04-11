import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM } from "@testing-library/react";
import ListNews from "./listNews";
import { tabOptions } from "../types/types";
describe("worki", () => {
  test("render correctly ListNews", () => {
    const component = render(<ListNews />);
    component.getByText("HACKER NEWS");
  });
  test("local storage starts empty", () => {
    const component = render(<ListNews />);
    expect(localStorage.getItem("frameworkSelected")).toBe(null);
  });
});
