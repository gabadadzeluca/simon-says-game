import { useEffect, useState } from "react";
import { SGameBoardDiv } from "./GameBoard.styled";
import { Button } from "../Button";
import { timeout } from "../../utils/timeout";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 5 }, (_, index) => index + 1);
// array where each index is level and value is number of turns

export const GameBoard = () => {
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(3);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const getRandomIndex = () =>{
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * COLORS.length);
    } while (randomIndex === sequence[sequence.length - 1]);
    return randomIndex;
  }

  const displaySequence = async () => {
    for(let i=0; i<=sequence.length-1; i++){
      console.log("INDEX:",sequence[i]);
      await timeout(2000);
      setHighlightIndex(sequence[i]);
      await timeout(2000);
      setHighlightIndex(-1);
    }
    console.log("FINISHED DISPLAYING LEVEL",level);
    // user's turn
    setIsUserTurn(true);
  }

  const generateSequence = () =>{
    const sequenceCopy = [...sequence];
    for(let i = 0; i<level; i++){
      const randomIndex = getRandomIndex();
      console.log('adding random index', sequence, randomIndex );
      sequenceCopy.push(randomIndex);
      console.log("SEQUENCE COPY:", sequenceCopy)
    }
    setSequence(sequenceCopy);
  }
  
  useEffect(()=>{
    generateSequence();
  }, []);

  useEffect(()=>{
    if(sequence.length > 0){
      console.log("AAAA");
      displaySequence();
    }
  }, [sequence]);

  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <Button
          color={color}
          key={index}
          highlighted={highlightIndex === index}
          // highlighted={false}
          // onClick={()=>handleUserClick(index)}
          onClick={()=>console.log(`CLICKED ${index}`)}
        />
      ))}
    </SGameBoardDiv>
  );
};
