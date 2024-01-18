import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData, addTocart, addToWish } from '../../redux/slice/slice'
import '../../components/homepage/OurProd/OurProd.scss'
import { useParams } from 'react-router-dom';

const DetailProd = () => {
    let { id } = useParams();
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData())
    }, [])

    let findProd = products.find((prod) => prod._id === id)
    
    return (
        <section id='our_prod'>
            <div className="our_prod">
                <div className="container">
                    <div className="my_our_prod">
                        <div className="cards_all">
                            {
                                findProd ?
                                    (

                                        <div key={findProd._id} className="card_example">

                                            <img src={findProd.imagecard} alt="" width={400} height={400} />
                                            <div className="card_detail">
                                                <span>{findProd.prodname}</span>
                                                <div className="reiting">
                                                    <div className="star">
                                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />{findProd.raiting}
                                                    </div>
                                                    <div className="heart">
                                                        <FontAwesomeIcon style={{ color: "lightgray" }} icon={faHeart} />{findProd.like}

                                                    </div>
                                                </div>
                                                <span className='smaller_span'>{findProd.detail}</span>
                                                <div className="buttons_card">
                                                    <button className="card_btn" onClick={() => {
                                                        dispatch(addToWish(user))
                                                    }}>
                                                        <FontAwesomeIcon style={{ color: "lightgray" }} icon={faHeart} />
                                                    </button>

                                                    <button className="card_btn" onClick={() => {
                                                        dispatch(addTocart(findProd))
                                                    }}>Cart</button>

                                                </div>
                                            </div>
                                        </div>

                                    ) : null

                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DetailProd