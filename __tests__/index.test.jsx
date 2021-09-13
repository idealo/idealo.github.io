/**
 * @jest-environment jsdom
 */

import React from "react";
import { act, render, screen } from "@testing-library/react";
import Home from "../pages/index";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);
describe("Home", () => {
  it("renders the full page even without github data", async () => {
    await act(async () => render(<Home projectDatas={[]} />));

    const mainContent = screen.getByRole("main");

    expect(mainContent).toBeInTheDocument();
  });
});
