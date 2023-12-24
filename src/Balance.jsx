import styled from "styled-components"

const StyledBalance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-soft-red);
  padding-block: 1.6rem;
  padding-inline: 2.4rem;
  border-radius: 13px;
`

const Title = styled.p`
  color: var(--color-very-pale-orange);
  font-size: 1.4rem;
`

const BalanceNum = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-very-pale-orange);
`

const Logo = styled.img``

export default function Balance() {
  return (
    <StyledBalance>
      <div>
        <Title>My balance</Title>
        <BalanceNum>$921.48</BalanceNum>
      </div>
      <Logo src="logo.svg" alt="logo" />
    </StyledBalance>
  )
}
