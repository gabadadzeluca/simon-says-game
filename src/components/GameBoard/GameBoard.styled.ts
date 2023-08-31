import styled from "styled-components";

export const SGameBoardDiv = styled.div`
  display: grid;
  align-items: center;
  padding: 10rem;
  background-color: black;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  overflow: hidden;
  justify-content: center;
`;