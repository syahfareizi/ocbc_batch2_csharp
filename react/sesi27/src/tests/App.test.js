import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Render halaman Home dengan benar", () => {
  render(<App />);

  const title = screen.getByText(/why do we need test?/i);
  expect(title).toBeInTheDocument();

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("User List");

  fireEvent.click(btn);
  const backToHomeButton = screen.getByRole("button");
  expect(backToHomeButton).toBeInTheDocument();
  expect(backToHomeButton).toHaveTextContent("Back To Home");
});
