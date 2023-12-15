import React, { createContext, useState } from 'react'

export const WishlistContext = createContext()


function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])


  function addWishlist(item) {
    const index = wishlist.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setWishlist([...wishlist, item])
      return
    }
    setWishlist(wishlist.filter(x => x.id !== item.id))
  }


  function checkWishllist(item) {
    if (wishlist.findIndex((x) => x.id === item.id) !==-1) {
      return true;
    }
    return false;
  }


  return (
    <>
      <WishlistContext.Provider value={{ wishlist, addWishlist, checkWishllist }}>{children}</WishlistContext.Provider>
    </>
  );

}








export default WishlistProvider