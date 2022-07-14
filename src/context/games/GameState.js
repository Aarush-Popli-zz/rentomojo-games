import React, { useState } from 'react'
import GameContext from './GameContext'

const GameState = (props) => {
    const [games, setGames] = useState([]);
    const [initial, setInitial] = useState([])

    const fetchData = async () => {
        const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";
        let data = await fetch(url);
        let parsedData = await data.json();
        setGames(parsedData.slice(1));
        setInitial(parsedData.slice(1));
    }

    const compareText = (a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    const sortDataName = () => {
        const sortedData = [...initial]
        sortedData.sort((a, b) => compareText(a.title, b.title));
        setGames(sortedData);
    }

    const compareNumbers = (a, b) => {
        return (a > b) ? -1 : (a < b) ? 1 : 0;
    }

    const sortDataScores = () => {
        const sortedData = [...initial]
        sortedData.sort((a, b) => compareNumbers(a.score, b.score));
        setGames(sortedData);
    }

    const editorsChoice = () => {
        let eChoice = initial.filter(ele => ele.editors_choice === "Y")
        setGames(eChoice)
    }

    const gotoDefault = ()=>{
        setGames(initial);
    }

    const filteredGenre = (g) => {
        let getGenre = initial.filter(ele => ele.genre === g)
        setGames(getGenre)
    }

    return (
        <GameContext.Provider value={{ games, fetchData, sortDataName, sortDataScores, editorsChoice, gotoDefault, filteredGenre }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState