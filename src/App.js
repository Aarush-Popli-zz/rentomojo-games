import { useState } from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import About from './components/About';
import Games from './components/Games';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GameState from './context/games/GameState';

function App() {
  const [search, setSearch] = useState('');

  const get_data = (data) => {
    setSearch(data);
  }
  return (
    <>
      <GameState query={search}>
        <Router>
          <Navbar func={get_data} />
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Games query={search} />}></Route>
          </Routes>
        </Router>
      </GameState>
    </>
  );
}

export default App;
