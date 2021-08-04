/**
 * Home Page will display programs available for watch.
 *
 * Requirement for this challenge:
 * -  Display a simple carousel
 * -  Fetch data from data.json if programList has not been populated
 *
 * Parameters:
 *    @param {function} fetchProgramList to trigger fetch program
 *    Other parameters are passed down to carousel to be used there -
 *       but will not be passed if global state is implemented
 */

import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { ProgramDetails } from "../../types";
import "./Home.css";

interface HomeProps {
  programList: Array<ProgramDetails> | [];
  fetchProgramList: () => void;
  isActiveProgramId: number;
  setIsActiveProgram: (program: ProgramDetails) => void;
  enterFunction: () => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const {
    programList,
    fetchProgramList,
    isActiveProgramId,
    setIsActiveProgram,
    enterFunction,
  } = props;

  useEffect(() => {
    if (programList.length === 0) fetchProgramList();
  }, [programList, fetchProgramList]);

  return (
    <div className="home">
      <Carousel
        programList={programList}
        isActiveProgramId={isActiveProgramId}
        setIsActiveProgram={setIsActiveProgram}
        enterFunction={enterFunction}
      />
    </div>
  );
};

export default Home;
