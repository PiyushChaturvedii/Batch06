import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function handleSum() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSum} className="sub">
          SUB
        </button>
        <button onClick={handleReset} className="reset">
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
