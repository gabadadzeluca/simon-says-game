import { styled } from "styled-components"
import { GameBoard } from "./components/GameBoard"

function App() {
  return (
    <SContainer>
      <GameBoard />
    </SContainer>
  )
}

export default App


const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #331c54ea;
`