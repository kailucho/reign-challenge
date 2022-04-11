import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Title from "./title";
test("render correctly Title", () => {
  const component = render(<Title text="test" />);
  component.getByText("test");
});
