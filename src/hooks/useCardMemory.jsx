import { useEffect, useState} from 'react';
import { shuffleArray } from "../utils";
import {CardService} from "../service/CardService"

export const useCardMemory=()=>{
    const { getData, getMockData, useMockData } = CardService();
    const [nbaData, setNbaData] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [selectedNBA, setSelectedNBA] = useState([ ]);
    const [loading,setLoading] = useState(false);

    const resetGame=()=>{
        setSelectedNBA([""]);
        setCurrentScore(0);
      };
    //handle click take the pokemon name and passing it in continueRound.
      const handleClick = (nbaTeamName) => {
        continueRound(nbaTeamName);
        setNbaData(shuffleArray(nbaData));
      };
    //take a nbaTeamName for parameter. Uses inclued 
      const continueRound = (nbaTeamName) => {
        console.log({selectedNBA},"You can do it");
        //check and see if the pokemon Clicked has the same name as one clicked before.
        if (selectedNBA.includes(nbaTeamName)) {
          resetGame();
        } 
        else {
          const newScore = currentScore + 1;
          if (newScore > bestScore) {
            setBestScore(newScore);
          }
          setCurrentScore(newScore);
          //just adding selected pokemon to the list
          setSelectedNBA((prev) => [...prev, nbaTeamName]);
        }
      };

      const HandleNBAData=(teams)=>{
        let sortNBATeams=sortNBA(teams)
        let shuffNBATeams=shuffleArray(sortNBATeams)
        return shuffNBATeams.slice(0,5)
      
      }
      //take array return and display 5 slice.  

      const sortNBA =(teams)=>{
        let NBATeams= teams.filter((team)=>{
          return (team.isNBA)
        })
        return NBATeams;
      }

      // const sortNBA =(teams)=>{
      //   let NBATeams= teams.filter((team)=>{

      //     return (team.isNBA)
      //   })
      //   return NBATeams;
      // }
      

     
          
      useEffect(() => {
        setLoading(true)
        if (useMockData) {
          const data = getMockData();
          setNbaData(data);
        } else {
          getData().then((data) => setNbaData(HandleNBAData(sortNBA(data))))
        }
        setLoading(false)
      }, []);
      return{nbaData,handleClick,bestScore,currentScore,loading,sortNBA,HandleNBAData};
}