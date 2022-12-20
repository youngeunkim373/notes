import { useState } from "react";
import styled from "styled-components";
import ExpenseList from "./components/expenses/ExpenseList";
import ExpensesChart from "./components/expenses/ExpensesChart";
import ExpenseFilter from "./components/filter/ExpenseFilter";
import NewExpense from "./components/newExpense/NewExpense";
import { ExpenseTypes } from "./types/globalTypes";

const expenses: ExpenseTypes[] = [
  { date: new Date(2022, 11, 16), price: "￦6,400", title: "고양이 간식" },
  { date: new Date(2022, 11, 15), price: "￦1,900", title: "커피 테이크아웃" },
  { date: new Date(2022, 11, 15), price: "￦19,980", title: "장보기" },
  { date: new Date(2022, 10, 15), price: "￦19,980", title: "장보기" },
];

const ExpenseReport = () => {
  const [filter, setFilter] = useState<{ [key: string]: number }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  const [expenseList, setExpenseList] = useState<ExpenseTypes[]>(
    expenses.filter((el) => el.date.getMonth() + 1 === filter.month)
  );

  const addExpenseHandler = (expense: ExpenseTypes) => {
    expenses.push(expense);
    setExpenseList(
      expenses
        .filter(
          (el) =>
            el.date.getFullYear() === Number(filter.year) &&
            el.date.getMonth() + 1 === Number(filter.month)
        )
        .sort((a: any, b: any) => b.date - a.date)
    );
  };

  const filterChangeHandler = (id: string, value: number) => {
    setFilter((prev) => {
      return { ...prev, [id]: Number(value) };
    });

    if (id === "year") {
      setExpenseList(
        expenses
          .filter((el) => el.date.getFullYear() === Number(value))
          .sort((a: any, b: any) => b.date - a.date)
      );
    }

    if (id === "month") {
      setExpenseList(
        expenses
          .filter((el) => el.date.getMonth() + 1 === Number(value))
          .sort((a: any, b: any) => b.date - a.date)
      );
    }
  };

  return (
    <Container>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selectedYear={filter.year}
        selectedMonth={filter.month}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={expenses} filter={filter} />
      <ExpenseList expenseList={expenseList} filteredMonth={filter.month} />
    </Container>
  );
};

export default ExpenseReport;

const Container = styled.div`
  background-color: rgb(31, 31, 31);
  border-radius: 12px;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 700px;
  min-width: 400px;
  padding: 1rem;
  width: 100%;
`;
