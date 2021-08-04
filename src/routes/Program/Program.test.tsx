/**
 * Program Page
 *
 * Test cases to cover
 * 1. Display Image
 * 2. Display Title
 * 3. Display Subtitle
 * 4. Display Description
 * 5. Clicking back button will run a function
 */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Program from ".";

afterEach(cleanup);

describe("Program Page Tests", () => {
  test("Checking if Program Details are displayed on the page", async () => {
    const selectedProgram = {
      id: 67298,
      title: "Dr. Death",
      description:
        "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Drama",
      year: 2021,
      language: "English",
    };
    render(
      <Program selectedProgram={selectedProgram} backFunction={() => {}} />
    );

    // Check if elements are on the screen
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByTestId("subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();

    // Check if values are correct
    expect(screen.getByText("Dr. Death")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("MA 15+ | 2021 | 1 season | Drama | English")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Dr. Death Movie Poster")).toBeInTheDocument();
  });

  test("Check if clicking backspace will run a function", async () => {
    const selectedProgram = {
      id: 67298,
      title: "Dr. Death",
      description:
        "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Drama",
      year: 2021,
      language: "English",
    };

    let events: any = {};

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    const backFunction = () => {
      const view = document.getElementById("program-details");
      if (!view) return;

      view.innerHTML = "test input";
    };

    render(
      <Program selectedProgram={selectedProgram} backFunction={backFunction} />
    );

    events.keydown({ key: "Backspace", keyCode: 8 });

    await waitFor(() =>
      expect(screen.getByText("test input")).toBeInTheDocument()
    );
  });
});
