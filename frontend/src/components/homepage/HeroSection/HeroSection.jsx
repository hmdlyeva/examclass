import React from 'react'
import './HeroSection.scss'
const HeroSection = () => {
    return (
        <section id='hero_section'>
            <div className="hero_section">
                <div className="container">
                    <div className="my_hero_section">
                        <h1>Shop With Us</h1>
                        <p>Shop With Us
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                        <div className="buttons">
                            <button className='hover_one'>SHOP NOW</button>
                            <button className='hover_second'>CLUB MEMBERSHIP</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection