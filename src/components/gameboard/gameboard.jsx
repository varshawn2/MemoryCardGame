import React from "react";
import { TeamCard } from "../teamCard/teamCard";
import { GameBoardContainer, CardRow} from "./gameboard.styles";
import { Scoreboard } from "../Scoreboard/Scoreboard";

export const GameBoard =(props)=>{
    const{nba,currentScore,bestScore,handleClick}=props;
    return(
        <div>
        <GameBoardContainer>
            <CardRow>
                {nba.map((nba,index)=>{
                    return(
                        <div key={index}>
                            <TeamCard
                              type={nba.type}
                              frontImg={nba.frontImg}
                              name={nba.name}
                              handleClick={handleClick}
                              />
                        </div>
                    )
                })}
            </CardRow>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}></Scoreboard>
        </GameBoardContainer>
        </div>
    )
}
