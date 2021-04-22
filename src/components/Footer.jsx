import React, {useState} from 'react'
import './styles/Footer.css'
import RulesImg from '../assets/images/image-rules.svg'
import closeIcon from '../assets/images/icon-close.svg'

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
                    <img className="rules-image"src={RulesImg} alt="rulesimage"/>
                    <img src={closeIcon} alt="closeicon"onClick={hideModal}/>
                </div>
            </div> : null
            }
        </div>
    )
}

export default Footer
