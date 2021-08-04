/**
 * Navbar Component
 *
 * Test cases to cover
 * 1. Display logo
 * 2. Display Menu Items
 */

import { cleanup, render, screen } from "@testing-library/react";
import Navbar from ".";

afterEach(cleanup);

describe("Navbar Tests", () => {
  test("Logo is visible", async () => {
    render(<Navbar menuItems={[]} />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  test("Menu Items display", async () => {
    const menuItems = ["test"];
    render(<Navbar menuItems={menuItems} />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
