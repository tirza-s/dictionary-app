import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <h2 className="title">React Dictionary App</h2>

      <div className="container">
        <main>
          <Dictionary />
        </main>

      </div>
      <footer className="App-footer">Coded with 💜 by
        <a href="https://tirzasamosir.netlify.app/" target="_blank" rel="noreferrer"> Tirza S.</a>
      </footer>
    </div>
  );
}

export default App;
