import React from 'react'
import './styles/Header.css'

function Header({ score }) {
    return (
        <div className="header">
            <div className="game-name">
                <div>rock</div>
                <div>paper</div>
                <div>scissors</div>
            </div>
            <div className="score">
                <div>Score</div>
                <div className="score-number">{score}</div>
            </div>    
        </div>
    )
}

export default Header
