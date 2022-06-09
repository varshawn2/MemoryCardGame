import React,{useState} from "react";
import {CardContainer,CardImg,CardName} from "./teamCard.styles"

export const TeamCard=(props)=>{
    const[showFront,setShowFront]= useState(false);
    const{frontImg,name,isNBA,handleClick}=props;
    return(
        <CardContainer
        data-testid="Team-Card"
        onClick={() => handleClick(name)}
        isNBA={isNBA}
        onMouseEnter={() => setShowFront(showFront)}
        onMouseLeave={() => setShowFront(showFront)}
      >
        <CardImg  data-testid="FrontImg" hide={showFront} src={frontImg} />
          <CardName>{name}</CardName>
        </CardContainer>
    )
}