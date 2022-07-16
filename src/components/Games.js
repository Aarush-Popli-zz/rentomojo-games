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
        <>
            <div className='container mt-4 mb-2'>
                <div className="container row">
                    {filteredData.map((element) => {
                        return <div className="my-2 col-md-3" key={element.title + element.platform}>
                            <div className="card rounded-3" style={{ boxShadow: "inset 0 1px 0 0 rgb(255 255 255/.05)", backgroundColor: "rgb(30, 41, 59, 1)", color: "rgb(237, 240, 242, 1)" }}>
                                <div className="card-body">
                                    {element.editors_choice === "Y" &&
                                        <i className="bi bi-award-fill" style={{ fontSize: "20px", float: "right", color: "rgb(56, 189, 248, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title="Editor's Choice"></i>
                                    }
                                    <h5 className="card-title">{element.title}</h5>

                                    {element.platform.includes("Xbox 360") && <i className="bi bi-xbox me-2" style={{ fontSize: "17px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {(element.platform.includes("PlayStation 3") || element.platform.includes("PlayStation Vita")) && <i className="bi bi-playstation me-2" style={{ fontSize: "20px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {element.platform.includes("PC") && <i className="bi bi-microsoft me-2" style={{ fontSize: "17px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {(element.platform.includes("Nintendo 3DS") || element.platform.includes("Nintendo DS")) && <i className="bi bi-nintendo-switch me-2" style={{ fontSize: "16px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {element.platform.includes("Macintosh") && <i className="bi bi-apple me-2" style={{ fontSize: "18px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {element.platform.includes("iPhone") && <i className="bi bi-phone-fill me-2" style={{ fontSize: "18px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {element.platform.includes("iPad") && <i className="bi bi-tablet-fill me-2" style={{ fontSize: "18px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}
                                    {element.platform.includes("Android") && <i className="bi bi-android me-2" style={{ fontSize: "18px", color: "rgb(100, 116, 139, 1)" }} data-bs-toggle="tooltip" data-bs-placement="right" title={element.platform}></i>}

                                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill" style={{ boxShadow: "inset 0 1px 0 0 rgb(255 255 255/.05)", backgroundColor: "rgb(7, 78, 110, 1)" }}>{element.genre}</span>
                                    <span className="badge rounded-pill" style={{ float: "right", backgroundColor: "rgb(59, 130, 246, 1)" }}>{element.score} <i className="bi bi-star-fill" style={{ fontSize: "11px" }}></i></span>
                                    <p className='card-text mt-2' style={{ color: "rgb(216, 221, 227, 1)" }}>{element.title} is a {element.genre} game. It is compatible with {element.platform} and scores {element.score}/10 in our review.</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <footer className="footer px-5 d-flex flex-wrap justify-content-between align-items-center py-2" style={{ width: "100%", backgroundColor: "rgb(11, 17, 32, 0.75)", backdropFilter: "blur(10px)" }}>
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-light">Created By: Aarush Popli </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-1"><a className='text-light' href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer"><i className="bi bi-linkedin mx-2" style={{ fontSize: "25px" }}></i></a></li>
                    <li className="ms-1"><a className='text-light' href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer"><i className="bi bi-github mx-2" style={{ fontSize: "25px" }}></i></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Games