import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
function Home() {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState("")
    const { addBasket } = useContext(BasketContext)
    const { addWishlist, checkWishllist } = useContext(WishlistContext)


    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then((res) => res.json())
            .then((api) => {
                setProducts(api);
            })


    }, [])


    function handleInput(e) {
        setInput(e.target.value)
    }


    function filterResult(category) {
        setFilter(category)
    }
    return (
        <>
            <div className='first'>
                <div className='firstTexts'>
                    <p>Men New-Season</p>
                    <h2>JACKETS & COATS</h2>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className='second'>
                <div className='card'>
                    <div className='block'>
                        <div className='text'>
                            <h4>Women</h4>
                            <p>Spring 2018</p>
                        </div>
                    </div>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />

                </div>
                <div className='card'>
                    <div className='block'>
                        <div className='text'>
                            <h4>Men</h4>
                            <p>Spring 2018</p>
                        </div>
                    </div>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" />

                </div>
                <div className='card'>
                    <div className='block'>
                        <div className='text'>
                            <h4>Accessories</h4>
                            <p>New Trend</p>
                        </div>
                    </div>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp" alt="" />

                </div>
            </div>
            <div className='third'>
                <div className='thirdTop'>
                    <h2>PRODUCT OVERVIEW</h2>
                </div>
                <div className='filter'>
                    <div className='filterLeft'>
                        <ul>
                            <div onClick={() => { filterResult('') }} className='li'><li>All</li></div>
                            <div onClick={() => { filterResult('Mens') }} className='li'><li>Mens</li></div>
                            <div onClick={() => { filterResult('Womens') }} className='li'><li>Womens</li></div>
                            <div onClick={() => { filterResult('Kids') }} className='li'><li>Kids</li></div>
                        </ul>
                    </div>
                    <div className='filterRight'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search' value={input} onChange={handleInput} />
                    </div>
                </div>



                <div className='thirdBottom'>
                    {products
                        .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
                        .filter((item) => item.category.includes(filter))
                        .map((item) => (
                            <div key={item.id} className='crd'>
                                <Link to={`/${item.id}`}> <img src={item.images} alt="" /></Link>
                                <p className='p1'>{item.name}</p>
                                <p className='p2'>${item.price}</p>
                                <div onClick={() => { addBasket(item) }} className='iconB'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div onClick={() => { addWishlist(item) }} className='iconBbb'>
                                    <i className={`${checkWishllist(item) ? "fa-solid fa-heart" : "fa-regular fa-heart "}`}></i>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='button'>
                    <button>LOAD MORE</button>
                </div>

            </div>
            <ScrollToTop />
        </>
    )
}

export default Home