import styled from "styled-components";

interface ExpenseFilterProps {
  selectedYear: number;
  selectedMonth: number;
  onChangeFilter: Function;
}

const ExpenseFilter = ({
  selectedYear,
  selectedMonth,
  onChangeFilter,
}: ExpenseFilterProps) => {
  const onChangeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    onChangeFilter(id, value);
  };

  return (
    <Container>
      <div className="controls">
        <label>연도/월별 지출</label>
        <div className="control">
          <select
            id="year"
            value={selectedYear}
            onChange={onChangeFilterHandler}
          >
            <option value={new Date().getFullYear() - 2}>
              {new Date().getFullYear() - 2}
            </option>
            <option value={new Date().getFullYear() - 1}>
              {new Date().getFullYear() - 1}
            </option>
            <option value={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </option>
          </select>
          <select
            id="month"
            value={selectedMonth}
            onChange={onChangeFilterHandler}
          >
            <option value={1}>1월</option>
            <option value={2}>2월</option>
            <option value={3}>3월</option>
            <option value={4}>4월</option>
            <option value={5}>5월</option>
            <option value={6}>6월</option>
            <option value={7}>7월</option>
            <option value={8}>8월</option>
            <option value={9}>9월</option>
            <option value={10}>10월</option>
            <option value={11}>11월</option>
            <option value={12}>12월</option>
          </select>
        </div>
      </div>
    </Container>
  );
};

export default ExpenseFilter;

const Container = styled.div`
  color: white;
  padding: 0 1rem;

  .controls {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select {
    border-radius: 6px;
    font: inherit;
    font-weight: bold;
    margin-left: 10px;
    padding: 0.5rem 1rem;
    width: 150px;
  }
`;
