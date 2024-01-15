import React from 'react'
import ReactDOM from 'react-dom'
import './UpNavbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const UpNavbar = () => {
    return (
        <section id='up_navbar'>
            <div className="up_navbar">
                <div className="container">
                    <div className="my_up_navbar">

                        <div className="left_side">

                            <div className="iconss">
                                <FontAwesomeIcon style={{ color: "white" }} icon={faFacebook} />
                            </div>
                            <div className="icons">
                                <FontAwesomeIcon style={{ color: "white", marginLeft: "3px", marginTop: "3px" }} icon={faTwitter} />
                            </div>
                            <div className="icons">
                                <FontAwesomeIcon style={{ color: "white", marginLeft: "3px", marginTop: "3px" }} icon={faInstagram} />
                            </div>
                            <div className="icons">
                                <FontAwesomeIcon style={{ color: "white", marginLeft: "3px", marginTop: "3px" }} icon={faLinkedin} />
                            </div>

                        </div>

                        <div className="right_side">


                            <div className="left_one">
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faPhone} />
                                <p>(+1) 234 5678 9101</p>
                            </div>


                            <div className="right_one">
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faEnvelope} />
                                <p>shop@yourdomain.com</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default UpNavbar