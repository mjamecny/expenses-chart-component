import styled from "styled-components"

import Balance from "./Balance"
import Spending from "./Spending"

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-cream);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 54rem;
  margin: 0 auto;
  padding-inline: 1.6rem;
`

export default function App() {
  return (
    <StyledApp>
      <Container>
        <Balance />
        <Spending />
      </Container>
    </StyledApp>
  )
}
