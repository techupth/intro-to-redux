import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addCounter,
  resetCounter,
  subtractCounter,
} from "./slices/counterSlice";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="counter-app">
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={() => dispatch(addCounter())}> + </button>
          <button onClick={() => dispatch(subtractCounter())}>-</button>
          <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
