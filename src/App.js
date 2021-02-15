import Header from "./Header";
import './App.css';
import cookie from './cookie.png';

const App = () => {
  return (
    <>
      <Header title="bonus tip"/>
      <section className="container">
        <img alt="bonus-cookie-tip" src={cookie} />
      </section>
    </>
  );
}

export default App;
