import Header from "./Header";
import './App.css';
import {useContext} from "react";
import CounterProvider, {CounterContext} from "./counter-context";

const Increment = () => {
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <button
      onClick={() => setCounter(counter + 1)}>
      +
    </button>
  );
}

const Decrement = () => {
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <button
      onClick={() => setCounter(counter - 1)}>
      -
    </button>
  );
}

const Counter = () => {
  const {counter} = useContext(CounterContext);

  return (<code>Counter: {counter}</code>);
}

const App = () => {
  return (
    <>
      <Header title="useState and callbacks"/>
      <section className="container">
        <CounterProvider>
          <Increment/>
          <Counter/>
          <Decrement/>
        </CounterProvider>
      </section>
    </>
  );
}

export default App;
