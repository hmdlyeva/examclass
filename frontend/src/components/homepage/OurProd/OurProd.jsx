import React, { useEffect, useState } from 'react'
import './OurProd.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../../redux/slice/slice'

const OurProd = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData())
    }, [])

    return (
        <section id='our_prod'>
            <div className="our_prod">
                <div className="container">
                    <div className="my_our_prod">
                        <div className="upper_prod">
                            <h4>POPULAR PRODUCTS</h4>
                            <h1>Our Products</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                        </div>
                        <div className="cards_all">
                            {
                                products && products.map((user) => {
                                    return (


                                        <div key={user._id} className="card_example">
                                            {/* <div className="hover_image">
                                                <div className="card_image"></div>
                                            </div> */}

                                            <img src={user.imagecard} alt="" width={400} height={400}/>
                                            <div className="card_detail">
                                                <span>{user.prodname}</span>
                                                <div className="reiting">
                                                    <div className="star">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />{user.raiting}
                                                    </div>
                                                    <div className="heart">
                                                        <FontAwesomeIcon style={{ color: "lightgray" }} icon={faHeart} />{user.like}
                                                    </div>
                                                </div>
                                                <span className='smaller_span'>{user.detail}</span>
                                                <div className="buttons_card">
                                                    <div className="card_btn">CART</div>
                                                    <div className="view_btn">VIEW</div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProd