import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";
import "./Index.css";

function ReduxPractice() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxPractice;
