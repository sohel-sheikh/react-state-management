import Header from "./Header";
import './App.css';
import {useState} from "react";

const App = () => {
  const [name, setName] = useState('');

  return (
    <>
      <Header title="useState"/>
      <section className="container">
        <input type="text" value={name}
               onChange={e => setName(e.target.value)}/>
        <code>Name: {name}</code>
      </section>
    </>
  );
}

export default App;
