import React, {useState} from "react";

import { products } from "./seed";
import Product from "./Product";

export default function ProductList() {

    
  
  const handleProductVotes = (id) => {
    const votedItem = product.map((item) => item.id === id? {...item, votes: item.votes+1}: item);
    setProduct(votedItem)
  }

  

  return (
    <div>
      <h1>Popular Products</h1>
          <div>
            <Product 
            products={product}
            handleVotes={handleProductVotes}/>
          </div>
    </div>
  );
}
