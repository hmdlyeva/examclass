import React from 'react'
import './about.scss'
const AboutUs = () => {
    return (
        <section id='about_page'>
            <div className="about_page">
                <div className="container">
                    <div className="my_about">
                        <div className="left_side">
                            <div className="image_side"></div>
                            <div className="trust">
                                <h1>Trusted Merchant</h1>
                                <p>FOR 50 YEARS</p>
                            </div>
                        </div>
                        <div className="right_side">
                            <p>MERCHANT COMFORT</p>
                            <h1>About Us</h1>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius ab voluptas corrupti minima eos cupiditate sint aspernatur nesciunt dolore voluptate veniam facere doloremque, exercitationem cum quis nostrum neque laudantium!</p>

                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs