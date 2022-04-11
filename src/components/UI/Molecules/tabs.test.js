import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./tabs";
import { tabOptions } from "../../../types/types";
function arraysEqual(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
test("render correctly Tabs", () => {
  const pageSelected = "1";
  const setpageSelected = () => {};
  const component = render(
    <Tabs pageSelected={pageSelected} setpageSelected={setpageSelected} />
  );
  let tabs = component.getAllByRole("tab").map((item) => item.textContent);
  expect(
    arraysEqual(
      tabOptions.map((item) => item.text),
      tabs
    )
  ).toBe(true);
  // component.getByText("test");
});
