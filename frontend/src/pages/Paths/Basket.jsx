import React from 'react'
import '../../components/homepage/OurProd/OurProd.scss'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { addTocart, remvTocart, deleteCart } from '../../redux/slice/slice'
const Basket = () => {
    const products = useSelector((state) => state.products.basketprod)
    const dispatch = useDispatch()

    return (

        <section id='our_prod'>
            <div className="our_prod">
                <div className="container">
                    <div className="my_our_prod">
                        <div className="cards_all">
                            {
                                products && products.map((user) => {
                                    return (

                                        <div key={user._id} className="card_example">

                                            <img src={user.imagecard} alt="" width={400} height={400} />
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
                                                    <button className="card_btn" onClick={() => {
                                                        dispatch(addTocart(user))
                                                    }}>+</button>
                                                    <p>{user.count}</p>
                                                    <button className="view_btn" onClick={() => {
                                                        dispatch(remvTocart(user))
                                                    }}>-</button>
                                                    <button className="view_btn" onClick={() => {
                                                        dispatch(deleteCart(user))
                                                    }}>Delete</button>
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
        </section >
    )
}

export default Basket