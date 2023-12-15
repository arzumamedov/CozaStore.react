import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import './basket.css'
function BasketPage() {

  const { basket, RemoveFromBasket, increaseCount, decreaseCount } = useContext(BasketContext)
  return (
    <>
      <div className='thirdBottom'>
        {basket.map((item) => (
          <div key={item.id} className='crd'>
            <img src={item.images} alt="" />
            <p className='p1'>{item.name}</p>
            <p className='p2'>${item.price*item.count}</p>
            <i onClick={() => { RemoveFromBasket(item) }} className="fa-solid fa-x"></i>
            <div onClick={() => { decreaseCount(item) }} className='iconBbasket'>
              <i class="fa-solid fa-minus"></i>
            </div>
            <div onClick={() => { increaseCount(item) }} className='iconBbbbasket'>
              <i className="fa-solid fa-plus"></i>
            </div>
            <button className='countBtn'>{item.count}</button>

          </div>
        ))}
      </div>
    </>
  )
}

export default BasketPage