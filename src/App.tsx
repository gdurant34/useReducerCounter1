import "./styles.css";
import React, { useReducer } from "react";

const initialState = { count: 0 };

type Action = { type: "increment"; amount: number; } | { type: "decrement"; amount: number; } | { type: "reset"; };
type State = { count: number; };

function reducer(state: State, action: Action) {
  
  switch (action.type) {
    case "increment":
      return { count: state.count + action.amount };
    case "decrement":
      return { count: state.count - action.amount };
    case "reset":
      return { count: state.count = initialState.count };
    default:
      return { count: state.count };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

const thing1 = !!state.count ? state.count : 1;
const thing2 = state.count / 2;

  return (
    <div>
      Count: {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment", amount: thing1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", amount: thing2 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
