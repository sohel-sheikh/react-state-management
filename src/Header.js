import logo from './logo.svg';
import './App.css';

const Topic = ({title}) => {
  return (
    <h1>{title}</h1>
  );
}

const Header = ({title}) => {
  return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <Topic title={title}/>
  </header>);
};

export default Header;
