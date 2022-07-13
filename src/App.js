import './App.css';
import Navbar from "./components/Navbar";
import About from './components/About';
import Games from './components/Games';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Games />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
