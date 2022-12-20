import { createStore } from "redux";
import { CounterAction } from "./types";

interface CounterState {
  count: number;
  showCounter: boolean;
}

const initialState = { count: 0, showCounter: true };

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  if (action.type === "increment")
    return {
      count: state.count + Number(action.amount),
      showCounter: state.showCounter,
    };

  if (action.type === "decrement")
    return {
      count: state.count - Number(action.amount),
      showCounter: state.showCounter,
    };

  if (action.type === "toggle")
    return {
      count: state.count,
      showCounter: !state.showCounter,
    };

  return state;
};

const store = createStore(counterReducer);

export default store;
