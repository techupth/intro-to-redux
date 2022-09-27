import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCounter } from "./slices/counterSlice";

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
          <button>-</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
