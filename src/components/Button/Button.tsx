import styled from "styled-components";

export const Button = (props: {
  color: string;
  highlighted: boolean;
  onClick: ()=>void;
}) => {
  const { color, highlighted, onClick } = props;
  return (
    <SDiv
      color={color}
      highlighted={highlighted}
      onClick={onClick}
    >
     <div></div>  
    </SDiv>
  );
};

const SDiv = styled.button<{ color: string; highlighted: boolean }>`
  all: unset;
  box-sizing: border-box;
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    border: 0.4rem solid #a78484;
  }
  >div{
    background-color: ${({ color }) => color};
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: ${({ highlighted }) => (highlighted ? "1" : "0.3")};
  }
`;
