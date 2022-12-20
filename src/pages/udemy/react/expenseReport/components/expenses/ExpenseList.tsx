import styled from "styled-components";
import { ExpenseTypes } from "../../types/globalTypes";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  filteredMonth: number;
  expenseList: ExpenseTypes[];
}

const ExpenseList = ({ expenseList, filteredMonth }: ExpenseListProps) => {
  if (!expenseList.length) {
    return <StyledPara>지출 내역이 없습니다.</StyledPara>;
  }

  return (
    <StyledUl>
      {expenseList.map((el: ExpenseTypes, idx) => (
        <ExpenseItem
          key={idx}
          date={el.date}
          price={el.price}
          title={el.title}
        />
      ))}
    </StyledUl>
  );
};

export default ExpenseList;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledPara = styled.p`
  color: white;
  font-weight: bold;
  padding: 15px;
  text-align: center;
`;
