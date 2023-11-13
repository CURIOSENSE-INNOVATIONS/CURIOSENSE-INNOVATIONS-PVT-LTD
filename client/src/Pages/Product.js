import React from 'react'
import ProductCard from '../Components/ProductCard'

import Product1 from '../Images/Products/Product1.jpeg'

const Product = () => {
  return (
    <div>
      <div className="title">Our Products</div>
    <ProductCard
      name="CurioBook"
      bio="Unlock the world of kindergarten basics with our patented device designed for enjoyable learning experiences. Assess learning milestones and identify potential neurological disorders seamlessly."
      price="499/-"
      imageUrl={Product1}
    />
  </div>
  )
}

export default Product