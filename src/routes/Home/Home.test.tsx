/**
 * Home Page
 *
 * Test cases to cover for
 * 1. Displaying carousel
 */

import { cleanup, render, screen } from "@testing-library/react";
import Home from ".";
import { InitialProgramDetails } from "../../types";

afterEach(cleanup);

describe("Home Tests", () => {
  test("Checking if home is displaying carousel", async () => {
    render(
      <Home
        programList={[InitialProgramDetails]}
        fetchProgramList={() => {}}
        isActiveProgramId={0}
        setIsActiveProgram={() => {}}
        enterFunction={() => {}}
      />
    );

    // Check if carousel is rendered
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });
});
