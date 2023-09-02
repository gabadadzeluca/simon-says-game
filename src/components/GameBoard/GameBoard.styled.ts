import styled from "styled-components";

export const SGameBoardDiv = styled.div`
  display: grid;
  align-items: center;
  margin-top: 4rem;
  padding: 8rem;
  border-radius: 1.5rem;
  background-color: #151133;
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