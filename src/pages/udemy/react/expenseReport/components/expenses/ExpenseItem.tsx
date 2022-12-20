import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

interface ExpenseItemProps {
  date: Date;
  price: string;
  title: string;
}

const ExpenseItem = ({ date, price, title }: ExpenseItemProps) => {
  return (
    <Container>
      <ExpenseDate date={date} />
      <div className="description">
        <h2>{title}</h2>
        <div className="price">{price}</div>
      </div>
    </Container>
  );
};

export default ExpenseItem;

const Container = styled.li`
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.5rem;

  .description {
    align-items: flex-end;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-flow: column-reverse;
    gap: 1rem;
    justify-content: flex-start;
  }

  h2 {
    color: white;
    flex: 1;
    font-size: 1rem;
    margin: 0 1rem;
  }

  .price {
    background-color: #40005d;
    border: 1px solid white;
    border-radius: 12px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
  }

  @media (min-width: 580px) {
    .description {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    h2 {
      font-size: 1.25rem;
    }

    .price {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;
