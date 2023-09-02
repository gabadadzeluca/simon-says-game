import { useEffect, useState } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";
import { timeout } from "../../utils/timeout";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 25 }, (_, index) => index + 1);
// array where each index is level and value is number of turns

export const GameBoard = () => {

  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <Button
          color={color}
          key={index}
          // highlighted={highlightIndex === index}
          highlighted={false}
          // onClick={()=>handleUserClick(index)}
          onClick={()=>console.log(`CLICKED ${index}`)}
        />
      ))}
    </SGameBoardDiv>
  );
};
