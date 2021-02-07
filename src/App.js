import logo from './logo.svg';
import './App.css';

const Caption = () => {
  return (<h6>: the beginning :</h6>);
}

const Topic = () => {
  return (
    <>
      <h1>React State Management</h1>
      <Caption/>
    </>
  );
}

const WelcomeMessage = () => {
  return (<h3>Welcome to the talk</h3>);
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <WelcomeMessage/>
        <Topic/>
      </header>
    </div>
  );
}

export default App;
