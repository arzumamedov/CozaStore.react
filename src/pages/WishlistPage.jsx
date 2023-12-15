import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import './wishlist.css'
function WishlistPage() {
    const { wishlist, addWishlist } = useContext(WishlistContext)
    return (
        <>
            <div className='thirdBottom'>
                {wishlist.map((item) => (
                    <div key={item.id} className='crd'>
                        <img src={item.images} alt="" />
                        <p className='p1'>{item.name}</p>
                        <p className='p2'>${item.price}</p>
                        <i onClick={() => { addWishlist(item) }} className="fa-solid fa-heart wishlist"></i>
                    </div>
                ))}
            </div>
            <h1>salam</h1>
        </>
    )
}

export default WishlistPage