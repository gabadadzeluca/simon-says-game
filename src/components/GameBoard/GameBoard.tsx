import { useEffect, useState } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";
import { timeout } from "../../utils/timeout";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 25 }, (_, index) => index + 1);
// array where each index is level and value is number of turns

export const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isUserTurn, setIsUserTurn] = useState(false);
 
  console.log("SEQUENCE:",sequence);
  console.log("LVL:", level);
  console.log("USER'S SEQUENCE:", userSequence);
  console.log("USER's TURN:", isUserTurn);
  const generateSequence = () => {
    console.log("S:",sequence.length, "T",turns[level-1])
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
    console.log(userSequence.length, sequence.length);
    if(isUserTurn){
      if(userSequence.length < sequence.length){
        setUserSequence(prevSequance=>[...prevSequance, index]);
        // check sequence
        // if sequence correct do not do anything
        // if inccorect stop the loop
      }else if(userSequence.length === sequence.length){
        setIsUserTurn(false);
        setLevel(prevLevel=>prevLevel + 1);
        // disable click;
      }
    }
  } 


  const displayColors = async () => {
    console.log("DISPLAYING COLORS");
    for(let i = 0; i<sequence.length; i++){
      setHighlightIndex(sequence[i]);
      await timeout(1000);
      setHighlightIndex(-1);
      await timeout(1600);
      if(i === sequence.length-1){
        setIsUserTurn(true);
      }
    }
  }

  useEffect(()=>{
    generateSequence();
  }, [level]);

  useEffect(()=>{
    console.log("SEQUENCEEEEE", sequence)
    if (sequence.length > 0) {
      displayColors();
      console.log("updating level....")
      setLevel(prevLevel=>prevLevel + 1);
    }
  }, [sequence]);

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
