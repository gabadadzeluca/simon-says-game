import { useState } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];

const generateSequence = (level: number) => {
  let generatedArray = [];
  for (let i = 0; i < level; i++) {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    generatedArray.push(randomColor);
  }
  return generatedArray;
};

export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <>
          <Button color={color} key={index} />
        </>
      ))}
    </SGameBoardDiv>
  );
};

