import styled from "styled-components";

export const Button = (props: {
  color: string;
  highlighted: boolean;
  onClick: ()=>void;
}) => {
  const { color, highlighted, onClick } = props;
  return (
    <SButton
      color={color}
      highlighted={highlighted}
      onClick={onClick}
    ></SButton>
  );
};

const SButton = styled.button<{ color: string; highlighted: boolean }>`
  all: unset;
  background-color: ${({ color }) => color};
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${({ highlighted }) => (highlighted ? "1" : "0.3")};
  &:hover {
    opacity: 1;
  }
`;
