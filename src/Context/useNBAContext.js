import {useContext} from "react";
import{NBAContext} from "./NBAContext";

export const useNBAContent =()=>{
    const context= useContext{NBAContext};
    if(context===undefined){
        throw new Error("Must be used in an Context provider")
    }
    return context;
}