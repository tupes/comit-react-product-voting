import React, {useState} from "react";

import { products } from "./seed";
import Product from "./Product";

export default function ProductList() {

  const [product, setProductVote] = useState(products);
  
  const handleProductVotes = (vote) =>{
    console.log(vote);
  }


  return (
    <div>
      <h1>Popular Products</h1>
    
          <div>
            <Product item={product}/>
          </div>
 
      
    </div>
  );
}
