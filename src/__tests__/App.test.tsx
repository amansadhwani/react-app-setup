import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test("increments the count when the button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText("count is 0");
    fireEvent.click(button);
    expect(button.textContent).toBe("count is 1");
  });

  test("React app setup text is visible", () => {
    const { getByText } = render(<App />);

    const reactText = getByText("React app setup");

    expect(reactText).toBeVisible();
  });
});
