import React, { useEffect, useContext } from 'react'
import GameContext from '../context/games/GameContext';

const Games = (props) => {
    const context = useContext(GameContext);
    const { games, fetchData } = context;

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, [])

    const filteredData = games.filter((ele) => {
        if (props.query === '') {
            return ele;
        }
        else {
            return ele.title.toLowerCase().includes(props.query);
        }
    })

    return (
        <div className='container my-4'>
            <div className="container row">
                {filteredData.map((element) => {
                    return <div className="my-2 col-md-3" key={element.title + element.platform}>
                        <div className="card">
                            <div className="card-body">
                                {element.editors_choice === "Y" &&
                                    <i className="bi bi-award-fill text-success" style={{ fontSize: "20px", float: "right" }} data-bs-toggle="tooltip" data-bs-placement="right" title="Editor's Choice"></i>
                                }
                                <h5 className="card-title">{element.title}</h5>
                                {
                                    element.platform === "PC" ? <i className="bi bi-microsoft text-primary" style={{ fontSize: "17px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                        : element.platform === "PlayStation 3" || element.platform === "PlayStation Vita" ? <i className="bi bi-playstation text-primary" style={{ fontSize: "20px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                            : element.platform === "Xbox 360" ? <i className="bi bi-xbox text-success" style={{ fontSize: "17px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                : element.platform === "Macintosh" ? <i className="bi bi-apple text-dark" style={{ fontSize: "18px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                    : element.platform === "iPhone" ? <i className="bi bi-phone-fill text-dark" style={{ fontSize: "18px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                        : element.platform === "iPad" ? <i className="bi bi-tablet-fill text-dark" style={{ fontSize: "18px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                            : element.platform === "Android" ? <i className="bi bi-google text-dark" style={{ fontSize: "15px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                                : element.platform === "Nintendo 3DS" || element.platform === "Nintendo DS" ? <i className="bi bi-nintendo-switch text-danger" style={{ fontSize: "16px" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>
                                                                    : ""
                                }
                                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">{element.genre}</span>
                                <span className="badge bg-danger rounded-pill" style={{ float: "right" }}>{element.score}</span>
                                <p className='card-text mt-2'>{element.title} is a {element.genre} game. It is compatible with {element.platform} and scores {element.score}/10 in our review.</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Games