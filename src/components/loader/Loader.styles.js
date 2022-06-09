import styled from "styled-components";
import img from '../loader/giphy2.gif';
import nba from "../loader/nba.jpg"
import nhl from"../loader/NHL.jpg"
import mlb from"../loader/MLB.png"
export const LoadingContainer = styled.div`
      display: "flex";
      justify-Content:"center";
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: 1800px 900px;
      margin-left: 50px;
     
      text-Align: "center";
      font-Family: "fantasy";
      width: 1800px;
      height: 900px;
      color: yellow;
      outline: 3px dotted red;
`

export const Header = styled.h2`
      display: "flex";
      justify-Content:"center";
      text-align: center;
      border-top: 5px;
`
  export const NBAButton = styled.button`
display: flex;
justify-content: center;
width: 400px;
height: 200px;
margin: 25px;
margin-right: 40px;
background-image: url(${nba});
background-repeat: no-repeat;
background-size: 400px 200px;
text-align: center;
color: white;
font-size: xx-large;
cursor: pointer;
`
export const MLBButton = styled.button`
display: flex;
justify-content: center;
width: 400px;
height: 200px;
margin: 25px;
background-image: url(${mlb});
background-repeat: no-repeat;
background-size: 400px 200px;
text-align: center;
color: black;
cursor: pointer;
`
export const NHLButton = styled.button`
display: flex;
justify-content: center;
width: 400px;
height: 200px;
margin: 25px;
background-image: url(${nhl});
background-repeat: no-repeat;
background-size: 400px 200px;
text-align: center;
color: black;
cursor: pointer;
`
export const ButtonCon = styled.div`
column-count: 3;
  column-gap: 0px;
  margin: 20px;
  column-rule: 10px;
`