import axios from "axios";
import { teamMockData } from "../data/teamMockData";
import {shuffleArray } from "../utils";


export const CardService = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '93106c3c9dmsh3f676b059076d99p10f725jsn9310f0d473e0'
    }
  };
  const getData = async (amount = 5) => {
    let teamCardData = [];
      let res = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/teams`,options
      );
      console.log(res?.data?.response);
      for(let i =0;i<=res?.data?.response.length;i++){
        teamCardData.push({
          frontImg: res?.data?.response[i]?.logo,
          name: res?.data?.response[i]?.name,
          isNBA: res?.data?.response[i]?.nbaFranchise,
        })
      }   
      // const shuffleArray= shuffleArray(teamCardData);
      // return shuffleArray.slice(0,amount)
    return teamCardData;
  };  
  const getMockData = () => {
    return teamMockData;
  };

  const useMockData = false;

  return { getData, options, getMockData, useMockData};
}; 

export const MLBCardService = () => {
  const MLBoptions = {
    method: 'GET',
    params: {league: '1', season: '2020'},
    headers: {
      'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com',
      'X-RapidAPI-Key': '4df023b27fmsh510ca495f9aaedap1e9061jsn2ffb40b5e87a'
    }
  };
  const getMLBData = async (amount = 5) => {
    let mlbCardData = [];
      let mlb = await axios.get(
        `https://api-baseball.p.rapidapi.com/teams`,MLBoptions
      );
     for(let i=0;i<=mlb.data.response.length;i++){
       mlbCardData.push({
         MLBname:mlb?.data?.response[i]?.name,
         MLBfrontImg:mlb?.data?.response[i]?.logo,
       })
     }
      console.log(mlbCardData);
    return mlbCardData;
  };  

return { getMLBData, MLBoptions};
}; 
  
