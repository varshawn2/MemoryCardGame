import React from "react";
import { Link } from "react-router-dom";
import{ LoadingContainer,Header,NBAButton,MLBButton,NHLButton,ButtonCon} from "./Loader.styles";

export const Loader =(props)=>{
    return(
    <LoadingContainer>
      <Header>STARTING GAME SOON .  .  . CHOOSE THE THEME YOU WANT TO PLAY - _ - </Header>
      <ButtonCon>
      <Link to="NBA"><NBAButton></NBAButton></Link>
      <Link to="MLB"><MLBButton></MLBButton></Link>
      <Link to="NHL"><NHLButton></NHLButton></Link>
      </ButtonCon>
    </LoadingContainer>
    )
  }


  

  

