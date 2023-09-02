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

const SDiv = styled.div<{ color: string; highlighted: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    border: 0.4rem solid #a78484;
  }
  >div{
    width: inherit;
    height: inherit;
    background-color: ${({ color }) => color};
    border-radius: inherit;
    opacity: ${({ highlighted }) => (highlighted ? "1" : "0.3")};
  }
`;
