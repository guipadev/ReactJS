import Header from './components/Header';
import Character from './components/Character';
import './css/style.css';
import './css/header.css';

function App() {
  return (
    <div className="App">
       <Header 
        title = "Rick and Morty API"
       />
       <Character />
    </div>
  );
}

export default App;
