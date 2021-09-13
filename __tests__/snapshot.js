import React from "react";
import renderer from "react-test-renderer";
import Index from "../pages/index";
jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);
it("renders homepage unchanged", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
