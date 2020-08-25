import React, { useState } from 'react'
import {orderBy} from 'lodash'
import { products } from './seed'
import Product from './Product'

export default function ProductList() {

  const [product, setProduct] = useState(products)

  const handleProductVotes = (id) => {
    const votedItem = product.map((item) =>
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    )
    setProduct(votedItem)
  }

  const sortProducts = () => {

    return (
      orderBy(product, ['votes'], ['desc'])
    )
  }

  return (
    <div>
      <h1 className='title'>Popular Products</h1>
      <hr />
      <div>
        <Product products={sortProducts()} handleVotes={handleProductVotes} />
      </div>
    </div>
  )
}
