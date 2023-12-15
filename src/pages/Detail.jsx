import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'
function Detail() {
    const { detail } = useParams()
    const [detailData, setDetailData] = useState([])
    const { addBasket } = useContext(BasketContext)
    const {addWishlist, checkWishllist} = useContext(WishlistContext)



    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then((res) => res.json())
            .then((api) => {
                const itemDetail = api.find((x) => x.id === detail)
                setDetailData(itemDetail);
            })


    }, [detail])
    return (
        <>
            <div className='detail'>
                <img src={detailData.images} alt="" />
                <div className='detailText'>
                    <p className='pdet'>{detailData.name}</p>
                    <p className='pdet2'><span>Category:</span>{detailData.category} </p>
                    <p className='pdet2'><span>Price:</span>${detailData.price}</p>
                    <p className='pdet2'><span>Model:</span>{detailData.model} </p>
                    <p className='pdet2'><span>Color:</span>{detailData.information?.color} </p>
                    <p className='pdet2'><span>Model:</span>{detailData.information?.size} </p>
                    <div className='detailbtn'>
                        <div className='iconBD' onClick={() => { addBasket(detailData) }}><i className="fa-solid fa-cart-shopping"></i></div>
                        <div onClick={() => { addWishlist(detailData) }} className='iconBbbD'>
                            <i className={`${checkWishllist(detailData) ? "fa-solid fa-heart" : "fa-regular fa-heart "}`}></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail