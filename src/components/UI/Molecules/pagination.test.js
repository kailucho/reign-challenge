import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pagination from "./pagination";

test("render correctly Pagination", () => {
  const pageSelected = 1;
  const setpageSelected = () => {};
  const component = render(
    <Pagination pageSelected={pageSelected} setpageSelected={setpageSelected} />
  );
  // component.getByText("test");
});
