import './App.css';
import { Footer } from './Footer';

const App = () => {
  return (
    <div className="app-body">
      <header className="App-header">
        <img src="rrm_se_logo_white.png" className="App-logo" alt="logo" />
        <p>
          Här kommer snart mer information om<br/>Reduction Roadmap Sverige.
        </p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
