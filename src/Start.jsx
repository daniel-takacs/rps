import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Start( {setPlayerChoise} ) {

    const choiseHandle = (e)=> {
        setPlayerChoise(e.target.dataset.id)
    }
    
    return (
        <div>
            <Link to="Result">
                <div data-id="rock" onClick={choiseHandle}>Rock</div>
            </Link>
            <Link to="Result">
                <div data-id="paper" onClick={choiseHandle}>Paper</div>
            </Link>
            <Link to="Result">
                <div data-id="scissors" onClick={choiseHandle}>Scissors</div>
            </Link>
        </div>
    )
}

export default Start
