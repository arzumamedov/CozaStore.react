import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
function Navbar() {
    const { basket } = useContext(BasketContext)
    return (
        <>
            <nav>
                <div className='navLeft'>
                    <div className='navLeftl'>
                        <Link to={'/'}><img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" /></Link>
                    </div>
                    <div className='navLeftR'>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/shop"}>Shop</Link></li>
                            <li>Features</li>
                            <li>Blog</li>
                            <Link to={"/about"}><li>About</li></Link>
                            <Link to={"/contact"}><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='navRight'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <Link to={"/basket"}><i className="fa-solid fa-cart-shopping"></i> <sup>{basket.length}</sup></Link>
                    <Link to={"/wishlist"}><i className="fa-regular fa-heart"></i></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar