/**
 * Carousel Component
 *
 * Test cases to cover for
 * 1. Display correct items
 * 2. Trigger Left function
 * 3. Trigger Right function
 * 4. Trigger Enter function
 */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Carousel from ".";
import { ProgramDetails } from "../../types";

afterEach(cleanup);

describe("Carousel Tests", () => {
  const sampleProgramList = [
    {
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
    },
    {
      id: 65737,
      title: "This Way Up",
      description:
        "This achingly funny and deeply moving comedy series follows the quick-witted Aine as she tries to get her life back in order and regain some semblance of happiness after suffering a nervous breakdown.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/657/37/65737-PosterArt-15bee119eb92a5f33670e6bd3f1af967.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Comedy",
      year: 2019,
      language: "English",
    },
    {
      id: 67517,
      title: "Power Book III: Raising Kanan",
      description:
        'POWER BOOK III: RAISING KANAN is a prequel set in the 1990s that chronicles the early years of Kanan Stark, the character first played by executive producer Curtis "50 Cent" Jackson.',
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/675/17/67517-PosterArt-d740bf2159cf9c3eb1b22db4043076ff.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Crime",
      year: 2021,
      language: "English",
    },
    {
      id: 56197,
      title: "First Wives Club",
      description:
        "TV adaptation of the comedy film about best friends Ari, Hazel \u0026 Bree who reunite to navigate Hazel's public divorce, Ari's unsatisfying marriage, and Bree's cheating husband. Together, they learn as long as they have each other, they're unstoppable.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/561/97/56197-PosterArt-469c02a0132ce2629859f70303083c85.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "M",
      genre: "Comedy",
      year: 2019,
      language: "English",
    },
    {
      id: 26702,
      title: "Black Monday",
      description:
        "BLACK MONDAY takes us back to October 19, 1987 – aka Black Monday, the worst stock market crash in the history of Wall Street.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/267/02/26702-PosterArt-fa4764f2e5af823683130cec70f227ae.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Comedy",
      year: 2018,
      language: "English",
    },
  ];

  let isActiveProgram = sampleProgramList[0];

  const setIsActiveProgram = (program: ProgramDetails) => {
    isActiveProgram = program;
  };

  const enterFunction = () => {
    const carousel = document.getElementById("carousel");
    if (carousel) carousel.innerHTML = "entered";
  };

  test("Checking if carousel is displaying content correctly", async () => {
    render(
      <Carousel
        programList={sampleProgramList}
        isActiveProgramId={isActiveProgram.id}
        setIsActiveProgram={setIsActiveProgram}
        enterFunction={() => enterFunction()}
      />
    );

    // Check if carousel exists on the page
    expect(screen.getByTestId(`carousel`)).toBeInTheDocument();

    // Check if values are correct
    expect(screen.getByAltText("Dr. Death Movie Poster")).toBeInTheDocument();
    expect(screen.getByAltText("This Way Up Movie Poster")).toBeInTheDocument();
    expect(
      screen.getByAltText("Power Book III: Raising Kanan Movie Poster")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("First Wives Club Movie Poster")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Black Monday Movie Poster")
    ).toBeInTheDocument();
  });

  test("Checking if clicking left will update isActiveProgram", async () => {
    let events: any = {};

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    setIsActiveProgram(sampleProgramList[1]);

    render(
      <Carousel
        programList={sampleProgramList}
        isActiveProgramId={isActiveProgram.id}
        setIsActiveProgram={setIsActiveProgram}
        enterFunction={enterFunction}
      />
    );

    events.keydown({ key: "Left", keyCode: 37 });

    await waitFor(() => expect(isActiveProgram.id).toBe(67298));
  });

  test("Checking if clicking right will update isActiveProgram", async () => {
    let events: any = {};

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    setIsActiveProgram(sampleProgramList[0]);

    render(
      <Carousel
        programList={sampleProgramList}
        isActiveProgramId={isActiveProgram.id}
        setIsActiveProgram={setIsActiveProgram}
        enterFunction={enterFunction}
      />
    );

    events.keydown({ key: "Right", keyCode: 39 });

    await waitFor(() => expect(isActiveProgram.id).toBe(65737));
  });

  test("Checking if clicking enter will run enterFunction", async () => {
    let events: any = {};

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    setIsActiveProgram(sampleProgramList[0]);

    render(
      <Carousel
        programList={sampleProgramList}
        isActiveProgramId={isActiveProgram.id}
        setIsActiveProgram={setIsActiveProgram}
        enterFunction={enterFunction}
      />
    );

    events.keydown({ key: "Enter", keyCode: 13 });

    await waitFor(() =>
      expect(screen.getByText("entered")).toBeInTheDocument()
    );
  });
});
