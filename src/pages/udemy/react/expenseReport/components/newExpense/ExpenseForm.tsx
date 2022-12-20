import React, { useState } from "react";
import styled from "styled-components";
import { ExpenseTypes } from "../../types/globalTypes";
import formatDate from "../../utils/formatDate";
import Modal from "../modal/Modal";

interface ExpenseFormProps {
  onSaveExpense: Function;
}

const ExpenseForm = ({ onSaveExpense }: ExpenseFormProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [userInputs, setUserInputs] = useState<ExpenseTypes>({
    title: "",
    date: new Date(),
    price: "",
  });
  const [error, setError] = useState<{ [key: string]: string } | null>(null);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    setUserInputs((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newDate = new Date(userInputs.date);
    const newPrice = "￦" + Number(userInputs.price).toLocaleString();

    if (newDate > new Date()) {
      setError({
        title: "날짜 선택 오류",
        message: "미래의 지출을 미리 기록할 수 없습니다.",
      });
      return;
    }

    onSaveExpense({ date: newDate, price: newPrice, title: userInputs.title });
    setUserInputs({ title: "", date: new Date(), price: "" });
  };

  const onClickOpenForm = () => {
    setUserInputs({ title: "", date: new Date(), price: "" });
    setOpen((prev) => !prev);
  };

  const errorHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (
      (e.target as HTMLButtonElement | HTMLDivElement).className.includes(
        "closable"
      )
    )
      setError(null);
  };

  let expenseForm: React.ReactElement = (
    <div className="line">
      <div className="isNotOpen">
        <button type="button" onClick={onClickOpenForm}>
          지출 추가
        </button>
      </div>
    </div>
  );

  if (isOpen) {
    expenseForm = (
      <>
        <div className="line">
          <div className="control">
            <label>Date</label>
            <input
              id="date"
              required
              type="date"
              min="2020-01-01"
              max="2022-12-31"
              value={formatDate(userInputs.date)}
              onChange={onChangeText}
            />
          </div>
          <div className="control">
            <label>Price</label>
            <input
              id="price"
              required
              type="number"
              min="2022-01-01"
              max="2022-12-31"
              value={userInputs.price}
              onChange={onChangeText}
            />
          </div>
        </div>
        <div className="line">
          <div className="control">
            <label>Title</label>
            <input
              id="title"
              required
              type="text"
              value={userInputs.title}
              onChange={onChangeText}
            />
          </div>
          <div className="isOpen">
            <button type="submit">지출 추가</button>
          </div>
          <div className="isOpen">
            <button type="button" onClick={onClickOpenForm}>
              취소
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <FormContainer onSubmit={onSubmitHandler}>{expenseForm}</FormContainer>
    </>
  );
};

export default ExpenseForm;

const FormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  text-align: left;

  label {
    display: block;
    font-weight: bold;
    padding-bottom: 10px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 6px;
    font: inherit;
    min-width: 100px;
    padding: 0.5rem 0;
    width: 100%;
  }

  .control {
    width: 100%;
  }

  .line {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 2rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  .isNotOpen {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .isOpen {
    margin-top: 1.8rem;
  }

  button {
    background: #40005d;
    border: 0;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.7rem;
    width: 100px;
  }
`;
