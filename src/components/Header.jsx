import React from 'react'

function Header({score}) {
    return (
        <div className="header">
            <div className="game-name">
                <div>rock</div>
                <div>paper</div>
                <div>scissors</div>
            </div>
        <div className="score">
            <div>Score:{score}</div>
            </div>    
        </div>
    )
}

export default Header
