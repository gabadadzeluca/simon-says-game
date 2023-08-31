import { useState, useEffect } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];

const generateSequence = (level: number):string[] => {
  let generatedArray = [];
  for (let i = 0; i < level; i++) {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    generatedArray.push(randomColor);
  }
  return generatedArray;
};

const displaySequence = (sequence:string[]) =>{
  sequence.map((color)=>{
    console.log(color);
    // light up the colors in order of sequence
  })
}

export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [sequence, setSequence ] = useState(generateSequence(level))

  // const sequence = generateSequence(level);
  console.log("sequence:",sequence);
  

  useEffect(() => {
    if (highlightIndex < sequence.length) {
      const timeoutId = setTimeout(() => {
        setHighlightIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [highlightIndex, sequence]);
  useEffect(() => {
    if (highlightIndex === sequence.length) {
      // reset and move to the next level or action
      setHighlightIndex(0);
      setLevel((prevLevel) => prevLevel + 1);
      setSequence(generateSequence(level));
    }
  }, [highlightIndex, sequence, level]);
  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <>
          <Button color={color} key={index} highlighted={highlightIndex === index}/>
        </>
      ))}
    </SGameBoardDiv>
  );
};

