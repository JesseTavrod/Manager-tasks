//  react testing library
import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "./Login";

describe('<Login ',  () => {

  it('renders the title', () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeInTheDocument();

  })
})
