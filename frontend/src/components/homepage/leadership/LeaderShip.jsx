import React from 'react'
import './leader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LeaderShip = () => {
    return (
        <section id='leader_ship'>
            <div className="leader_ship">
                <div className="container">
                    <div className="my_ship">
                        <div className="upper">
                            <p>TEAM</p>
                            <h1>Leadership</h1>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="image">

                                </div>
                                <div className="detail">
                                    <p>John Rooster</p>
                                    <p className='light'>CO-FOUNDER, PRESIDENT</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat, aperiam rerum nostrum sapiente dignissimos fugiat cumque. Quidem cupiditate sunt similique blanditiis est et ratione nesciunt! Molestias voluptas doloribus perspiciatis!</p>
                                    <div className="icons">
                                        <FontAwesomeIcon className='iconicon' icon={faFacebook} />
                                        <FontAwesomeIcon className='iconicon' icon={faTwitter} />
                                        <FontAwesomeIcon className='iconicon' icon={faInstagram} />
                                        <FontAwesomeIcon className='iconicon' icon={faLinkedin} />

                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="image">

                                </div>
                                <div className="detail">
                                    <p>John Rooster</p>
                                    <p className='light'>CO-FOUNDER, PRESIDENT</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat, aperiam rerum nostrum sapiente dignissimos fugiat cumque. Quidem cupiditate sunt similique blanditiis est et ratione nesciunt! Molestias voluptas doloribus perspiciatis!</p>
                                    <div className="icons">
                                        <FontAwesomeIcon className='iconicon' icon={faFacebook} />
                                        <FontAwesomeIcon className='iconicon' icon={faTwitter} />
                                        <FontAwesomeIcon className='iconicon' icon={faInstagram} />
                                        <FontAwesomeIcon className='iconicon' icon={faLinkedin} />

                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="image">

                                </div>
                                <div className="detail">
                                    <p>John Rooster</p>
                                    <p className='light'>CO-FOUNDER, PRESIDENT</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat, aperiam rerum nostrum sapiente dignissimos fugiat cumque. Quidem cupiditate sunt similique blanditiis est et ratione nesciunt! Molestias voluptas doloribus perspiciatis!</p>
                                    <div className="icons">
                                        <FontAwesomeIcon className='iconicon' icon={faFacebook} />
                                        <FontAwesomeIcon className='iconicon' icon={faTwitter} />
                                        <FontAwesomeIcon className='iconicon' icon={faInstagram} />
                                        <FontAwesomeIcon className='iconicon' icon={faLinkedin} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeaderShip