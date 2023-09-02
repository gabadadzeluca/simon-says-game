import { useEffect, useState } from "react";
import { SGameBoardDiv, SLevelP } from "./GameBoard.styled";
import { Button } from "../Button";
import { timeout } from "../../utils/timeout";

const COLORS = ["blue", "red", "yellow", "green", "purple", "cyan"];
const turns = Array.from({ length: 20 }, (_, index) => index + 1);
// array where each index is level and value is number of turns

export const GameBoard = () => {
  const [canClick, setCanClick] = useState(false);
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequenceCopy, setSequenceCopy] = useState([...sequence]);
  const time = level < 3 ? 1000 : 500;
  
  console.log("LEVEL:", level);
  console.log("SEQUENCE:", sequence);
  
  const getRandomIndex = () => {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * COLORS.length);
    } while (randomIndex === sequence[sequence.length - 1]);
    return randomIndex;
  };
  const displaySequence = async () => {
    setCanClick(false);
    for (let i = 0; i <= sequence.length - 1; i++) {
      await timeout(time);
      setHighlightIndex(sequence[i]);
      await timeout(time);
      setHighlightIndex(-1);
    }
    console.log("FINISHED DISPLAYING LEVEL", level);
    // user's turn
    setCanClick(true);
  };

  const generateSequence = () => {
    const sequenceCopy = [...sequence];
    const itemsToAdd = turns[level-1] - sequence.length;
    console.log("ITEMS TO ADD:",itemsToAdd);
    for (let i = 0; i < itemsToAdd; i++) {
      const randomIndex = getRandomIndex();
      sequenceCopy.push(randomIndex);
    }
    setSequence(sequenceCopy);
  };

  const handleUserClick = (index: number) => {
    const sequenceToGuess = [...sequenceCopy];
    console.log("SEQUENCE TO GUESS", sequenceToGuess);
    console.log(`CLICKED ON:${index}`);
    if (canClick) {
      const expectedIndex = sequenceToGuess.shift();
      setSequenceCopy(sequenceToGuess);
      if (expectedIndex === index) {
        if (sequenceToGuess.length === 0) {
          console.log("START NEW ROUND");
          setCanClick(false);
          setLevel((prevLevel) => prevLevel + 1);
          // start new round
        }
      } else {
        alert("END GAME");
        setCanClick(false);
        setLevel(1);
        setSequence([]);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log("GENERATING...");
    generateSequence();
  }, [level]);

  useEffect(() => {
    if (sequence.length > 0) {
      displaySequence();
      setSequenceCopy(sequence);
    }
  }, [sequence]);

  return (
    <SGameBoardDiv>
      {COLORS.map((color, index) => (
        <Button
          color={color}
          key={index}
          highlighted={highlightIndex === index}
          onClick={() => handleUserClick(index)}
        />
      ))}
      <SLevelP>{level}</SLevelP>
    </SGameBoardDiv>
  );
};
