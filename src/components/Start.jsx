import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'
import Scissors from '../assets/images/icon-scissors.svg'
import '../App.css'

function Start( {setPlayerChoise} ) {

    const choiseHandle = (e)=> {
        setPlayerChoise(e.target.dataset.id)
    }
    
    return (
        <div className="start">
            <div className="triangle-up">
                <Link to="Result">
                    
                    <div className="image paper start-image">
                        <img src={Paper} alt="paper" data-id="paper" onClick={choiseHandle}/>
                    </div>
                </Link>
                <Link to="Result">
                    <div className="image scissors start-image">
                        <img src={Scissors} alt="scissors" data-id="scissors" onClick={choiseHandle}/>
                    </div>
                </Link>
            </div>
            <div className="triangle-down">
                <Link to="Result">
                    <div className="image rock start-image">
                        <img src={Rock} alt="rock" data-id="rock" onClick={choiseHandle}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Start
