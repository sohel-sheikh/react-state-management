import Header from "./Header";
import './App.css';
import {useState} from "react";

const Name = () => {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" value={name}
             onChange={e => setName(e.target.value)}/>
      <code>Name: {name}</code>
    </>
  );
}

const App = () => {
  return (
    <>
      <Header title="useState"/>
      <section className="container">
        <Name/>
      </section>
    </>
  );
}

export default App;
