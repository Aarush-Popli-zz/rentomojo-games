import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GameContext from '../context/games/GameContext';

const Navbar = (props) => {
    const context = useContext(GameContext);
    const { sortDataName, sortDataScores, editorsChoice, gotoDefault, filteredGenre } = context;
    const [inputText, setInputText] = useState("");
    
    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        props.func(inputText);
    }, [props, inputText])

    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={()=>{gotoDefault()}}>Games</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" onClick={()=>{gotoDefault()}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" onClick={() => {editorsChoice()}}>Editor's Choice</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataScores() }}>Sort by Scores</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Sort by Name</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genre
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Platformer") }}>Platformer</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Puzzle") }}>Puzzle</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Sports") }}>Sports</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Strategy") }}>Strategy</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Fighting") }}>Fighting</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("RPG") }}>RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Action") }}>Action</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Adventure") }}>Adventure</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Shooter") }}>Shooter</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Music") }}>Music</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Board") }}>Board</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Racing") }}>Racing</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Action, Adventure") }}>Action & Adventure</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Action, RPG") }}>Action & RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Strategy, RPG") }}>Strategy & RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { filteredGenre("Racing, Action") }}>Racing & Action</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputHandler} />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar