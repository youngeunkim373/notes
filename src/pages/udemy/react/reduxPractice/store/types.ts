const INCREMENT = "increment" as const;
const DECREMENT = "decrement" as const;
const TOGGLE = "toggle" as const;

export const increase = () => ({ type: INCREMENT, amount: 1 });
export const decrease = () => ({ type: DECREMENT, amount: 1 });
export const toggle = () => ({ type: TOGGLE });

export type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof toggle>;
