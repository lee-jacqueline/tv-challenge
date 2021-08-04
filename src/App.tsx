import React, { useState } from "react";
import Home from "./routes/Home";
import Program from "./routes/Program";
import Navbar from "./components/Navbar";
import "./App.css";
import { InitialProgramDetails, ProgramDetails } from "./types";

const App: React.FC = () => {
  // Handling state here but ideally moved to a context folder
  const menuItems = ["Home", "TV Shows", "Movies"];
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetails>(
    InitialProgramDetails
  );
  const [isActiveProgram, setIsActiveProgram] = useState<ProgramDetails>(
    InitialProgramDetails
  );
  const [programList, setProgramList] = useState([]);

  const backFunction = () => {
    setCurrentPage("home");
    setSelectedProgram(InitialProgramDetails);
  };

  const enterFunction = () => {
    setCurrentPage("program");
    setSelectedProgram(isActiveProgram);
  };

  const fetchProgramList = () => {
    try {
      fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProgramList(data);
          setIsActiveProgram(data[0]);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Navbar menuItems={menuItems} />
      {currentPage === "home" ? (
        <Home
          programList={programList}
          fetchProgramList={fetchProgramList}
          isActiveProgramId={isActiveProgram.id}
          setIsActiveProgram={setIsActiveProgram}
          enterFunction={enterFunction}
        />
      ) : (
        <Program
          selectedProgram={selectedProgram}
          backFunction={backFunction}
        />
      )}
    </div>
  );
};

export default App;
