import { useReducer } from "react";

const intialState = {
  counter1: 1,
  counter2: 5,
};
// a pure function which accepts the current state and action which is making the modification to the state
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter1: state.counter1 + action.value };
    case "increment5":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement":
      return { ...state, counter1: state.counter1 - action.value };
    case "decrement5":
      return { ...state, counter2: state.counter2 - action.value };
    case "reset":
      return intialState;
    default:
      return state;
  }
};

const CounterThree = () => {

    // complex object data type state management 
  const [counterThreeState, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <h2>Counter Three</h2>
      <div>
        <p>No of clicks is {counterThreeState.counter1}</p>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -1
        </button>
      </div>

      <div>
        <p>No of clicks is {counterThreeState.counter2}</p>

        <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
          -5
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default CounterThree;
