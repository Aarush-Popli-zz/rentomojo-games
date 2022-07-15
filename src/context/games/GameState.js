import React, { useState } from 'react'
import GameContext from './GameContext'

const GameState = (props) => {
    const [games, setGames] = useState([]);
    const [initial, setInitial] = useState([])

    const fetchData = async () => {
        const url = process.env.REACT_APP_API_LINK;
        let data = await fetch(url);
        let parsedData = await data.json();
        
        let setData = [];
        parsedData.slice(1).forEach((e) => {
            if (setData[e.title] !== undefined) {
                setData[e.title].platform = [...setData[e.title].platform, ", ", ...e.platform]
                setData[e.title].platform = setData[e.title].platform.join("")
            }
            else {
                setData[e.title] = e;
            }
        });
        var cleanData = Object.values(setData);

        setGames(cleanData);
        setInitial(cleanData);
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

    const sortDataScoresAsc = () => {
        const sortedData = [...initial]
        sortedData.sort((a, b) => (a.score < b.score) ? -1 : (a.score > b.score) ? 1 : 0);
        setGames(sortedData);
    }

    const sortDataScoresDes = () => {
        const sortedData = [...initial]
        sortedData.sort((a, b) => (a.score > b.score) ? -1 : (a.score < b.score) ? 1 : 0);
        setGames(sortedData);
    }

    const editorsChoice = () => {
        let eChoice = games.filter(ele => ele.editors_choice === "Y")
        setGames(eChoice)
    }

    const gotoDefault = () => {
        setGames(initial);
    }

    const filteredGenre = (g) => {
        let getGenre = initial.filter(ele => ele.genre.includes(g))
        setGames(getGenre)
    }

    const filteredPlatform = (g) => {
        let getPlatform = initial.filter(ele => ele.platform.includes(g))
        setGames(getPlatform)
    }

    return (
        <GameContext.Provider value={{ games, fetchData, sortDataName, sortDataScoresAsc, sortDataScoresDes, editorsChoice, gotoDefault, filteredGenre, filteredPlatform }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState