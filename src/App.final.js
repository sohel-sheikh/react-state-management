import Header from "./Header";
import './App.css';
import {useState} from "react";

const Increment = ({handleOnClick}) => {
  return (
    <>
      <button
        onClick={handleOnClick}>
        +
      </button>
    </>
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Increment
        handleOnClick={() => setCounter(counter => counter + 1)}/>
      <code>Counter: {counter}</code>
    </>
  );
}

const App = () => {
  return (
    <>
      <Header title="State lifting"/>
      <section className="container">
        <Counter/>
      </section>
    </>
  );
}

export default App;
