import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GameContext from '../context/games/GameContext';

const Navbar = (props) => {
    const context = useContext(GameContext);
    const { sortDataName, sortDataScoresDes, sortDataScoresAsc, editorsChoice, gotoDefault, filteredGenre, filteredPlatform } = context;
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
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "rgb(11, 17, 32, 0.75)", backdropFilter: "blur(10px)"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={() => { gotoDefault() }}>
                    <img src="/logo192.png" alt="" width="30" height="24" />
                    GameSearch
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" onClick={() => { gotoDefault() }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" onClick={() => { editorsChoice() }}><i className="bi bi-award-fill" style={{ fontSize: "15px", marginRight: "2px" }}></i>Editor's Choice</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { sortDataScoresAsc() }}>Scores (Low to High)<i className="bi bi-arrow-up"></i></Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { sortDataScoresDes() }}>Scores (High to Low)<i className="bi bi-arrow-down"></i></Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { sortDataName() }}>Sort by Name</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genre
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Platformer") }}>Platformer</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Puzzle") }}>Puzzle</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Sports") }}>Sports</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Strategy") }}>Strategy</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Fighting") }}>Fighting</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("RPG") }}>RPG</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Action") }}>Action</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Adventure") }}>Adventure</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Shooter") }}>Shooter</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Music") }}>Music</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Board") }}>Board</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredGenre("Racing") }}>Racing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${location.pathname === "/about" ? "disabled" : "active"}`} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Platform
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("Android") }}><i className="bi bi-android me-2"  style={{ fontSize: "15px" }}></i>Android</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("iPad") }}><i className="bi bi-tablet-fill me-2"  style={{ fontSize: "15px" }}></i>iPad</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("iPhone") }}><i className="bi bi-phone-fill me-2"  style={{ fontSize: "15px" }}></i>iPhone</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("Macintosh") }}><i className="bi bi-apple me-2"  style={{ fontSize: "15px" }}></i>Macintosh</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("Nintendo") }}><i className="bi bi-nintendo-switch me-2"  style={{ fontSize: "15px" }}></i>Nintendo</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("PC") }}><i className="bi bi-microsoft me-2"  style={{ fontSize: "15px" }}></i>PC</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("PlayStation") }}><i className="bi bi-playstation me-2"  style={{ fontSize: "15px" }}></i>PlayStation</Link></li>
                                <li><Link className="dropdown-item rounded-2" to="/" onClick={() => { filteredPlatform("Xbox") }}><i className="bi bi-xbox me-2"  style={{ fontSize: "15px" }}></i>Xbox</Link></li>
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