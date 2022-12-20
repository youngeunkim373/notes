import styled from "styled-components";
import { ExpenseTypes } from "../../types/globalTypes";
import ExpenseForm from "./ExpenseForm";

export interface NewExpenseProps {
  onAddExpense: Function;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseHandler = (enteredExpenses: ExpenseTypes[]) => {
    const expenseData = {
      ...enteredExpenses,
    };
    onAddExpense(expenseData);
  };

  return (
    <Container>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </Container>
  );
};

export default NewExpense;

const Container = styled.div`
  background-color: #a892ee;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  max-width: 95%;
  padding: 1rem;
  text-align: center;
  width: 50rem;

  .new-expense button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  .new-expense button:hover,
  .new-expense button:active {
    background-color: #510674;
    border-color: #510674;
  }

  .new-expense button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  .new-expense button.alternative:hover,
  .new-expense button.alternative:active {
    background-color: #ddb3f8;
  }
`;
