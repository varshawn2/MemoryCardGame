import styled from "styled-components";

export const ScoreBoard = styled.div`
/* background: linear-gradient(to right bottom, #1d428a, #55619f, #7f82b4, #a7a6ca, #cdcbe0, #d4cce6, #ddcdea, #e7ceed, #e4a5d1, #e479a5, #dd4a6e, #c8102e); */
background: beige;
outline: 5px inset orange;
margin-top: 30px;
display: grid;
grid-template-columns: repeat(3,1fr);
width: 1600px;
padding: 20px;
height: 1000px;
margin-left: 100px;
color: black;
text-align: center;
;`
export const CurrentScore = styled.div`
color: red;
font-size: xx-large;
text-align: center;
;`
export const HighScore = styled.div`
color: green;
text-align: center;
font-size: xx-large;
;`
export const Title = styled.div`
color: black;
text-align: center;
font-size: xx-large;
;`