import styled from "styled-components";

export const CardContainer = styled.div`
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 10px/20px;;
  margin: 10px;
  outline: 5px solid orange;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  ${(props) =>
    props.type &&
    `&:hover {
      background-color: ${typeColors[props.type]}
    }`}
`;

const typeColors = {
  poison: "yellowgreen",
  fire: "red",
  normal: "white",
  bug: "darkgreen",
  water: "aqua",
  ground: "brown",
  electric: "lightyellow",
  ghost: "darkslategrey",
  psychic: "purple",
  grass: "green",
  rock: "grey",
  fighting: "pink",
};

export const CardImg = styled.img`
  height: 200px;
  width: 200px;
  display: ${(props) => (props.hide ? "none" : null)};
  transition: 0.6s;
  ${(props) =>
    props.front &&
    `&:hover {
    background-color: ${typeColors[props.type]}
  }`}
`;

export const CardName = styled.h3`
  text-align: center;
  color: black;
  margin-bottom: 60px;
  font-family: "Impact, fantasy";
  text-transform: capitalize;
`;