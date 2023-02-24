import React from 'react'
import '../styles/ItemCard.css'
const ItemCard = ({item}) => {
  return (
    <div className='card'>
        <img className='card-img' src={item.imgUrl} alt="" />
        <h2>{item.description}</h2>
        <h3>price: ${item.price}</h3>
    </div>
  )
}

export default ItemCard