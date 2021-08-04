/**
 * Carousel
 *
 * Requirement for this challenge:
 * -  Display a simple carousel
 * -  Navigation between items with left, right and enter keyboard keys
 * -  No more than ten carousel items
 * -  Edge cases: When no carousel items to display, the carousel won't render anything.
 *
 * Parameters:
 *    @param {ProgramDetails[] | []} programList list of programs to display on the carousel
 *    @param {number} isActiveProgramId the active program id
 *    @param {function} setIsActiveProgram updates the isActionProgram state
 *    @param {function} enterFunction runs when enter button is clicked
 */

import React, { useCallback, useEffect } from "react";
import { ProgramDetails } from "../../types";
import Card from "../Card";
import "./Carousel.css";

export interface CarouselProps {
  programList: Array<ProgramDetails> | [];
  isActiveProgramId: number;
  setIsActiveProgram: (program: ProgramDetails) => void;
  enterFunction: () => void;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { programList, isActiveProgramId, setIsActiveProgram, enterFunction } =
    props;

  // Fetch the index of the active program by id
  const currentIndex = programList.findIndex(
    (program) => program.id === isActiveProgramId
  );

  // Handle Key Press from event
  const handleKeyPress = useCallback(
    (e) => {
      if (programList.length > 0) {
        if (e.keyCode === 37) {
          // key press left arrow
          if (currentIndex > 0)
            setIsActiveProgram(programList[currentIndex - 1]);
        } else if (e.keyCode === 39) {
          // key press right arrow
          if (currentIndex < programList.length - 1)
            setIsActiveProgram(programList[currentIndex + 1]);
        } else if (e.keyCode === 13) {
          // key press enter
          enterFunction();
        }
      }
    },
    [currentIndex, programList, setIsActiveProgram, enterFunction]
  );

  // Setting up addEventListener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Make the card visible if active
  useEffect(() => {
    const activeCard = document.getElementById(
      `carousel-card-${isActiveProgramId}`
    );
    if (activeCard) {
      activeCard.scrollIntoView({
        block: "center",
        inline: "center",
      });
    }
  }, [isActiveProgramId]);

  return (
    <div
      id="carousel"
      data-testid="carousel"
      className="carousel"
      key="carousel"
    >
      {programList.length > 0 &&
        programList.map((program) => (
          <Card
            key={`carousel-card-${program.id}`}
            programId={program.id}
            imageUrl={program.image}
            altText={`${program.title} Movie Poster`}
            isActive={isActiveProgramId === program.id}
          />
        ))}
    </div>
  );
};

export default Carousel;
