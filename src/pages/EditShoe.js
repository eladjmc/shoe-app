import React from 'react'
import { useParams } from 'react-router-dom';

const EditShoe = () => {
  const { itemId } = useParams();

  return (
    <div>EditShoe</div>
  )
}

export default EditShoe