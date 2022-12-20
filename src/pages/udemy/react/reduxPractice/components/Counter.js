// import { Component } from "react";
// import { useDispatch, useSelector, connect } from "react-redux/es/exports";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import classes from "./Counter.module.css";

//함수형 컴포넌트 & 리덕스
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = (e) => {
    const value = e.target.value ? e.target.value : 1;
    dispatch({ type: "increment", amount: value });
  };
  const decrementHandler = (e) => {
    const value = e.target.value ? e.target.value : 1;
    dispatch({ type: "decrement", amount: value });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={incrementHandler} value={5}>
          Increase by 5
        </button>
        <button onClick={decrementHandler}>Decrease</button>
        <button onClick={decrementHandler} value={5}>
          Decrease by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//클래스형 컴포넌트 & 리덕스
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.count}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increase</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrease</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { count: state.count };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
