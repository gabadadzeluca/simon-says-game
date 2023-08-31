import { useState, useEffect } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];

export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequence, setSequence ] = useState<number[]>([]);

  console.log(sequence, "LEVEL:",level);
  sequence.forEach(number=>{
    console.log(COLORS[number]);
  })
  
  const displaySequence = () =>{
    let randomIndex:number;
    do {
        randomIndex = Math.floor(Math.random() * COLORS.length);
    } while (randomIndex === sequence[sequence.length - 1]);
    setSequence((prevSequence)=>[...prevSequence, randomIndex]);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setHighlightIndex((prevIndex) => prevIndex + 1);
      displaySequence();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [highlightIndex, sequence]);
  useEffect(() => {
    if (sequence.length === level) {
      setHighlightIndex(sequence[sequence.length - 1]);
      setLevel((prevLevel) => prevLevel + 1);
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

