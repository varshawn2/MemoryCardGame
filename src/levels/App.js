import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
import { GameBoard } from '../components/gameboard/gameboard';
import {useCardMemory} from "../hooks/useCardMemory"
import { Loader } from "../components/loader/Loader";
 

const App = () => {
  const {
    nbaData,
    handleClick,
    bestScore,
    currentScore,
    loading
  }=useCardMemory();

console.log(nbaData)
// console.log(mlbCardData )
  if(loading){
    return(
        <Loader></Loader>
    );

  }
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

export default App;