import React, {useState} from 'react'
import './styles/Footer.css'
import RulesImg from '../assets/images/image-rules.svg'

function Footer() {
    const [show, setShow] = useState(false)

    const showModal = ()=>{
        setShow(true)
    }
    const hideModal = ()=> {
        setShow(false)
    }

    return (
        <div className="rules">
            <button className="rules-button" onClick={showModal}>Rules</button>
            { show ?  
            <div className="modal">
                <div className="modal-content">
                    <h2>Rules</h2>
                    <img src={RulesImg} alt="rulesimage"/>
                    <button onClick={hideModal}>close</button>
                </div>
            </div> : null
            }
        </div>
    )
}

export default Footer
