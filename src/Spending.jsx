import styled from "styled-components"
import Day from "./Day"

const StyledSpending = styled.div`
  background-color: var(--color-very-pale-orange);
  border-radius: 13px;
  padding: 2.4rem;
`

const Heading = styled.h1`
  font-size: 2.4rem;
`

const DaysContainer = styled.div`
  display: flex;
  height: 230px;
  gap: 1.6rem;
  align-items: flex-end;
`

const Line = styled.div`
  height: 1px;
  background-color: var(--color-cream);
  margin-top: 2.4rem;
`

const TotalSpendingTitle = styled.p`
  color: var(--color-medium-brown);
  margin-top: 2.4rem;
`

const TotalSpendingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.1;
  margin-top: 0.8rem;
`

const TotalSpendingNum = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
`

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Percent = styled.p`
  font-weight: 700;
`

const PercentSubtitle = styled.p`
  color: var(--color-medium-brown);
`

const days = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
]

export default function Spending() {
  const totalAmount = days.reduce((acc, curr) => acc + curr.amount, 0)

  return (
    <StyledSpending>
      <Heading>Spending - Last 7 days</Heading>
      <DaysContainer>
        {days.map((day) => (
          <Day key={day.day} day={day} totalAmount={totalAmount} />
        ))}
      </DaysContainer>
      <Line />
      <TotalSpendingTitle>Total this month</TotalSpendingTitle>
      <TotalSpendingContainer>
        <TotalSpendingNum>$478.33</TotalSpendingNum>
        <PercentContainer>
          <Percent>+2.4%</Percent>
          <PercentSubtitle>from last month</PercentSubtitle>
        </PercentContainer>
      </TotalSpendingContainer>
    </StyledSpending>
  )
}
