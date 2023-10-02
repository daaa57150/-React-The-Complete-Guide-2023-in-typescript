import logo from './logo2.svg';
import './App.scss';
import _ from 'lodash';
import ExpenseItem from './components/expense-item.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> 
          <p>{ _.lowerCase('TEST') }</p>
          <p><ExpenseItem /></p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
