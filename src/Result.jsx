import React from 'react'
import {Link} from 'react-router-dom'

function Result( {playerChoise} ) {
    return (
        <div>
            <Link to="/">
                <div>{playerChoise}</div>
                New Game
            </Link>
        </div>
    )
}

export default Result
