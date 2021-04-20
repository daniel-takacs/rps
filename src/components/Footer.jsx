import React, {useState} from 'react'
import '../App.css'
import RulesImg from '../assets/images/image-rules.svg'

function Footer() {
    const [show, setShow] = useState(false)

    const showModal = ()=>{
        setShow(true)
    }

    return (
        <div className="rules">
            <button onClick={showModal}>Rules</button>
            { show ? <div className="modal">
                <div className="modal-content">
                    <img src={RulesImg} alt="rulesimage"/>
                </div>
            </div> : null
            }
        </div>
    )
}

export default Footer
