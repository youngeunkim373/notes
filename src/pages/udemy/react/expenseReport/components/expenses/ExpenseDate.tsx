import styled from "styled-components";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Container>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </Container>
  );
};

export default ExpenseDate;

const Container = styled.div`
  align-items: center;
  background: #2a2a2a;
  border: 1px solid #ececec;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 5.5rem;
  justify-content: center;
  width: 5.5rem;

  .year {
    font-size: 0.75rem;
  }

  .month {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
