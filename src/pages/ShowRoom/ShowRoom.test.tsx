//  react testing library
import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";
import ShowRoom from "./ShowRoom";

describe('<Login ',  () => {

  it('renders the title', () => {
    render(<ShowRoom />);

    expect(screen.getByText("ShowRoom")).toBeInTheDocument();
  }),
  it("renders the cars", () => {
    
  })
})
