import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'

  const Pages = ({productItems, cartItem,addToCart}) =>{

  return (
    <>
    <Home cartItem={cartItem} />
    <FlashDeals addToCart={addToCart} productItems={productItems}/>
    </>
  )
}
export default Pages