import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import FrameworkSelect from "./frameworkSelect";

test("render correctly FrameworkSelect", () => {
  const component = render(<FrameworkSelect />);
});
