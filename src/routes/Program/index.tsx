/**
 * Program Page will contain the details of the program
 *
 * Requirement for this challenge:
 * -  Include details (title, description, image, rating, year, genre, language)
 * -  Clicking backspace will take the view back to home
 *
 * Parameters:
 *    @param {ProgramDetails} selectedProgram the program that has been selected to display
 *    @param {function} backFunction the function used when the back key is pressed
 */

import React, { useCallback, useEffect } from "react";
import { ProgramDetails } from "../../types";
import "./Program.css";

interface ProgramProps {
  selectedProgram: ProgramDetails;
  backFunction: () => void;
}

const Program: React.FC<ProgramProps> = (props) => {
  const { selectedProgram, backFunction } = props;

  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 8) {
        backFunction();
      }
    },
    [backFunction]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div id="program-details" className="program" data-testid="program">
      <img
        src={selectedProgram.image}
        alt={`${selectedProgram.title} Movie Poster`}
        data-testid="image"
        className="program-poster"
      />
      <div className="details">
        <h1 data-testid="title" className="title">
          {selectedProgram.title}
        </h1>
        <h2 data-testid="subtitle" className="subtitle">
          {selectedProgram.rating} | {selectedProgram.year} | 1 season |{" "}
          {selectedProgram.genre} | {selectedProgram.language}
        </h2>
        <p data-testid="description" className="description">
          {selectedProgram.description}
        </p>
      </div>
    </div>
  );
};

export default Program;
