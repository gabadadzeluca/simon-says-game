import { Button } from "../Button";

const COLORS = ['blue', 'red', 'yellow', 'green', 'purple'];

const generateSequence = (level:number) =>{
  let generatedArray = [];
  for(let i = 0; i<level; i++){
    const randomColor = COLORS[Math.floor(Math.random()*COLORS.length)]
    generatedArray.push(randomColor);
  }
  console.log(generatedArray);
}

export const GameBoard = () => {
  generateSequence(5);
  return (
    <>
      {COLORS.map((color, index)=>(
        <>
          <Button color={color} key={index}/>
          <br/>
        </>
      ))}
    </>
  );
}
