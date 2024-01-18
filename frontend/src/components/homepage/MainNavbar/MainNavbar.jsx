import React from 'react'
import './MainNavbar.scss'
import { Link, Outlet, useNavigate } from "react-router-dom";
export const MainNavbar = () => {
    const navigate = useNavigate();
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
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/basket">
                                        Cart
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">
                                        Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add">
                                        AddProd
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/special">
                                        Special
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">

                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            {/* <p>=</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
