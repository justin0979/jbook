import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "&components/App";

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with a heading", () => {
  act(() => {
    render(<App />, container);
  });
  const heading = container.querySelector("h1");
  expect(heading.textContent).toBe("With Typescript");
});
