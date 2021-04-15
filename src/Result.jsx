import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Result( {playerChoise} ) {
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
        }else if (playerChoise === "rock" && computerChoise === "paper"){
            setGameResult("lose")
        }else if (playerChoise === "paper" && computerChoise === "rock"){
            setGameResult("win")
        }else if (playerChoise === "paper" && computerChoise === "scissors"){
            setGameResult("lose")
        }else if (playerChoise === "scissors" && computerChoise === "rock"){
            setGameResult("lose")
        }else if (playerChoise === "scissors" && computerChoise === "paper"){
            setGameResult("win")
        }else {
            setGameResult("tie")
        }
        }
    
        useEffect(() => {
            Conditions()
        }, [computerChoise])

    return (
        <div>
            <Link to="/">
                <div>player choise:{playerChoise}</div>
                <div>computer choise:{computerChoise}</div>
                {gameResult === "win" ? <div>Result: You Win</div> : ""}
                {gameResult === "lose" ? <div>Result: You Lose</div> : ""}
                {gameResult === "tie" ? <div>Result: Tie</div> : ""}
                <div>New Game</div>
            </Link>
        </div>
    )
}

export default Result
