import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Text from "./text";

test("render correctly Text", () => {
  const component = render(<Text text="test" />);
  component.getByText("test");
});
