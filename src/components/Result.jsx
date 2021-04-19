import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'
import Scissors from '../assets/images/icon-scissors.svg'
import '../App.css'

function Result( {playerChoise, score, setScore} ) {
    const [gameResult, setGameResult] = useState("")
    const[computerChoise, setComputerChoise] = useState("")
    const choises = ['rock','paper','scissors']
    
    const newComputerChoise = ()=> {
    setComputerChoise(choises[Math.floor(Math.random()*choises.length)])
    }

    useEffect(() => {
        newComputerChoise()
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
                    {playerChoise == 'rock' ? <div className="image rock"><img src={Rock}/></div> : ''}
                    {playerChoise == 'paper' ? <div className="image paper"><img src={Paper}/></div> : ''}
                    {playerChoise == 'scissors' ? <div className="image scissors"><img src={Scissors}/></div> : ''}
                    </div>
                <div>
                    {computerChoise == 'rock' ? <div className="image rock"><img src={Rock}/></div> : ''}
                    {computerChoise == 'paper' ? <div className="image paper"><img src={Paper}/></div> : ''}
                    {computerChoise == 'scissors' ? <div className="image scissors"><img src={Scissors}/></div> : ''}
               </div>
               </div>
               <div className="who-win-text">
                    {gameResult === "win" ? <div>You Win</div> : ""}
                    {gameResult === "lose" ? <div>You Lose</div> : ""}
                    {gameResult === "tie" ? <div>Tie</div> : ""}
                    </div>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <div className="new-game-button">
                    <button>New Game</button>
                </div>
            </Link>
           
        </div>
    )
}

export default Result
