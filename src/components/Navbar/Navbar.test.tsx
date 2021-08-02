/**
 * Test cases to cover for Navbar
 * 1. Logo
 * 2. Menu Items are displayed
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
    })
})