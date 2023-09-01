import { useState } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";
import useMount from "../../hooks/useMount";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 25 }, (_, index) => index + 1);
// array where each index is level and value is number of turns
console.log(turns);


export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);

  sequence.forEach((number) => {
    console.log(COLORS[number]);
  });

  const generateSequence = () => {
    if (sequence.length >= turns[level-1]) {
      return;
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * COLORS.length);
    } while (randomIndex === sequence[sequence.length - 1]);
    setSequence((prevSequence) => [...prevSequence, randomIndex]);
  };

  const handleUserClick = (index:number) =>{
    if(userSequence.length < sequence.length){
      setUserSequence(prevSequance=>[...prevSequance, index]);
      // check sequence
      // if sequence correct do not do anything
      // if inccorect stop the loop
    }
  } 

  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <Button
          color={color}
          key={index}
          highlighted={highlightIndex === index}
          onClick={()=>handleUserClick(index)}
        />
      ))}
    </SGameBoardDiv>
  );
};
