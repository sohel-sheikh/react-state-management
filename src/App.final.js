import Header from "./Header";
import './App.css';
import {useState} from "react";

const getCounterInitialState = () => {
  // heavy computation/api call
  return 0;
}

const Counter = () => {
  // callback in useState to call getCounterInitialState only once
  const [counter, setCounter] = useState(() => getCounterInitialState());

  return (
    <>
      <button
        // callback in setCounter to avoid race condition
        onClick={() => setCounter(currentCounter => currentCounter + 1)}>
        +
      </button>
      <code>Counter: {counter}</code>
    </>
  );
}

const App = () => {
  return (
    <>
      <Header title="useState and callbacks"/>
      <section className="container">
        <Counter/>
      </section>
    </>
  );
}

export default App;
