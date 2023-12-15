import React from 'react'
import BasketProvider from './BasketContext'
import WishlistProvider from './WishlistContext'

function MainContext({ children }) {
    return (
        <>
            <WishlistProvider>
                <BasketProvider>
                    {children}
                </BasketProvider>
            </WishlistProvider>

        </>
    )
}

export default MainContext