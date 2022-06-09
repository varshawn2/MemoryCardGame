import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
import { GameBoard } from '../components/gameboard/gameboard';
import {useCardMemory} from "../hooks/useCardMemory"

 

const AllTeams = () => {
  const {
    nbaData,
    handleClick,
    bestScore,
    currentScore,
    loading
  }=useCardMemory();

console.log(nbaData)

  
  return (

    <div>
      <Link to="/">HOME</Link>
       <GameBoard 
       nba={nbaData}
       handleClick={handleClick}
       currentScore={currentScore}
       bestScore={bestScore}
       />
    </div>
  );
};
export default AllTeams;