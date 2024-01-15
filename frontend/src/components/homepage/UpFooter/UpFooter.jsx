import React from 'react'
import './UpFooter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const UpFooter = () => {
    return (
        <section id='up_footer'>
            <div className="up_footer">
                <div className="container">
                    <div className="my_up_footer">
                        <div className="left_side">
                            <div className="about_us">
                                <h3>ABOUT US</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
                                </p>
                            </div>
                            <div className="quick_links">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Testimonials</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="follow_us">
                                <h3>FOLLOW US</h3>
                                <div className="icons_link">
                                    <FontAwesomeIcon className='iconicon' icon={faFacebook} />
                                    <FontAwesomeIcon className='iconicon' icon={faTwitter} />
                                    <FontAwesomeIcon className='iconicon' icon={faInstagram} />
                                    <FontAwesomeIcon className='iconicon' icon={faLinkedin} />
                                </div>
                            </div>
                        </div>
                        <div className="right_side">
                            <h3>FEATURED PRODUCT</h3>
                            <div className="card_footer">

                                <div className="image_footer"></div>

                                <p>Leather Brown Shoe</p>
                                <h5>$60.00</h5>
                                <button>ADD TO CART</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpFooter