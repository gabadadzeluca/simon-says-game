import { useState, useEffect } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 25 }, (_, index) => index + 1);
// array where each index is level and value is number of turns

export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);

  console.log(sequence, "LEVEL:", level, "USER SEQ:", userSequence);
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
    }
  } 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      generateSequence();
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [highlightIndex, sequence]);

  useEffect(() => {
    console.log("TURNS:", turns[level - 1]);
    if (sequence.length === turns[level]) {
      setHighlightIndex(sequence[sequence.length - 1]);
      // stop the loop HERE
      setLevel((prevLevel) => prevLevel + 1);
    }
  }, [highlightIndex, sequence, level]);

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
