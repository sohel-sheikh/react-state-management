import Header from "./Header";
import './App.css';
import {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </>
  );
}

const App = () => {
  return (
    <>
      <Header title="useState and callbacks"/>
      <section className="container">
        <Counter/>
        <code>Counter: {`counter ??`}</code>
      </section>
    </>
  );
}

export default App;
