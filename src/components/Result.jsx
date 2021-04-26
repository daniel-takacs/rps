import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'
import Scissors from '../assets/images/icon-scissors.svg'
import './styles/Result.css'

function Result( {playerChoise, score, setScore} ) {

    const [gameResult, setGameResult] = useState("")
    const [computerChoise, setComputerChoise] = useState("")
    const choises = ['rock','paper','scissors']
    
    const newComputerChoise = ()=> {
    setComputerChoise(choises[Math.floor(Math.random()*choises.length)])
    }

    useEffect(() => {
        setTimeout(()=> {newComputerChoise()}, 800)
        
    }, [])

    const Conditions = ()=> {
        if (playerChoise === "rock" && computerChoise === "scissors"){
            setGameResult("win")
            setScore(score + 1 )
        }else if (playerChoise === "rock" && computerChoise === "paper"){
            setGameResult("lose")
            setScore(score - 1)
        }else if (playerChoise === "paper" && computerChoise === "rock"){
            setGameResult("win")
            setScore(score + 1 )
        }else if (playerChoise === "paper" && computerChoise === "scissors"){
            setGameResult("lose")
            setScore(score - 1)
        }else if (playerChoise === "scissors" && computerChoise === "rock"){
            setGameResult("lose")
            setScore(score - 1)
        }else if (playerChoise === "scissors" && computerChoise === "paper"){
            setGameResult("win")
            setScore(score + 1 )
        }else {
            setGameResult("tie")
        }
        }
    
        useEffect(() => {
            Conditions()
        }, [computerChoise])

    return (
        <div className="result">
                <div className="icons">
                    <div>
                        {playerChoise == 'rock' ? 
                            <>
                                <div className="image rock result-image"><img src={Rock}/></div>
                                <p className="you-picked">You Picked</p>
                            </> 
                            : ''}
                        {playerChoise == 'paper' ? 
                            <>
                                <div className="image paper result-image"><img src={Paper}/></div>
                                <p className="you-picked">You Picked</p>
                            </> 
                            : ''}
                        {playerChoise == 'scissors' ? 
                            <>
                                <div className="image scissors result-image"><img src={Scissors}/></div>
                                <p className="you-picked">You Picked</p>
                            </> 
                            : ''}
                        </div>
                    <div>
                        {computerChoise == 'rock' ? 
                            <>
                                <div className="image rock result-image"><img src={Rock}/></div>
                                <p className="house-picked">the house picked</p>
                            </> 
                            : ''}
                        {computerChoise == 'paper' ? 
                            <>
                                <div className="image paper result-image"><img src={Paper}/></div>
                                <p className="house-picked">the house picked</p>
                            </> 
                            : ''}
                        {computerChoise == 'scissors' ? 
                            <>
                                <div className="image scissors result-image"><img src={Scissors}/></div>
                                <p className="house-picked">the house picked</p>
                            </> 
                            : ''}
                </div>
               </div>
                <div className="who-win-text">
                    {gameResult === "win" ? <div>You Win</div> : ""}
                    {gameResult === "lose" ? <div>You Lose</div> : ""}
                    {gameResult === "tie" ? <div>Tie</div> : ""}
                </div>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <div className="new-game-wrapper">
                    <button className="new-game-button">play again</button>
                </div>
            </Link>
        </div>
    )
}

export default Result
