import styled from "styled-components";

export const SGameBoardDiv = styled.div`
  display: grid;
  border-radius: 1.5rem;
  align-items: center;
  padding: 10rem;
  background-color: black;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  overflow: hidden;
  justify-content: center;
`;
export const SLevelP = styled.p`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  color: #ffffff;
  font-size: 4rem;
  font-weight: 600;
  background-color: red;
  text-align: center;
`