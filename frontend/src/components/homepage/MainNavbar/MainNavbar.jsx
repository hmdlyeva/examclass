import React from 'react'
import './MainNavbar.scss'
export const MainNavbar = () => {
    return (
        <section id='main_navbar'>
            <div className="main_navbar">
                <div className="container">
                    <div className="main_navbar_my">
                        <div className="left_side">
                            <h1>Selling</h1>
                            <div className="box_orange"></div>
                        </div>
                        <div className="right_side">
                            <ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>About Us</li>
                                <li>Special</li>
                                <li>Testimonials</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                            {/* <p>=</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
