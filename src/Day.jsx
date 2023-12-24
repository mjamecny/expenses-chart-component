import styled from "styled-components"

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;
`

const DayTag = styled.p`
  position: absolute;
  top: -33px;
  left: -9px;
  background-color: var(--color-dark-brown);
  color: var(--color-very-pale-orange);
  font-size: 1.4rem;
  padding: 0.4rem;
  border-radius: 5px;
  opacity: 0;
`

const DayGraph = styled.div`
  background-color: ${({ today }) =>
    today ? "var(--color-cyan)" : "var(--color-soft-red)"};
  width: 30px;
  height: ${({ dayHeight }) => `${dayHeight}px`};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;

    & + #something {
      opacity: 1;
    }
  }
`

const DayName = styled.div`
  font-size: 1.4rem;
  color: var(--color-medium-brown);
`

function isToday(day) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase()
  return day === today
}

export default function Day({ day, totalAmount }) {
  const { amount, day: dayName } = day

  const dayPercent = amount / totalAmount
  const dayHeight = dayPercent * 700

  const today = isToday(dayName)

  return (
    <StyledDay>
      <DayGraph dayHeight={dayHeight} today={today} />
      <DayTag id="something">${amount}</DayTag>
      <DayName>{dayName}</DayName>
    </StyledDay>
  )
}
