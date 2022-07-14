import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GameContext from '../context/games/GameContext';

const Navbar = (props) => {
    const context = useContext(GameContext);
    const { sortDataName, sortDataScores, editorsChoice, gotoDefault } = context;
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
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Platformer</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Puzzle</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Sports</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Strategy</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Fighting</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Action</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Adventure</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Shooter</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Music</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Board</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Racing</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Action & Adventure</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Action & RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Strategy & RPG</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={() => { sortDataName() }}>Racing & Action</Link></li>
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