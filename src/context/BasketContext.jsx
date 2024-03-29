import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])



    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (index === -1) {
          setBasket([...basket, {...item,count:1}]);
          return
        }
        basket[index].count++
        setBasket([...basket])
    }


    function RemoveFromBasket(item) {
        setBasket(basket.filter(x => x.id !== item.id))
    }

    function increaseCount(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        basket[index].count++
        setBasket([...basket])
      }


      function decreaseCount(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (basket[index].count === 1) {
            return
        }
        basket[index].count--
        setBasket([...basket])
      }



    return (
        <>
            <BasketContext.Provider value={{ basket, addBasket, RemoveFromBasket,increaseCount,decreaseCount }}>{children}</BasketContext.Provider>
        </>
    )
}

export default BasketProvider