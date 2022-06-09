import React from "react";
import { ScoreBoard,CurrentScore,HighScore,Title} from "./Scoreboard.styles";
export const Scoreboard = (props) => {
  const { currentScore, bestScore }=props
    return(  
      <ScoreBoard>
            <CurrentScore >Current Score: {currentScore} </CurrentScore>        
            <Title>Memory Game</Title>
            <HighScore >High Score: {bestScore} </HighScore>
      </ScoreBoard>
    );
}