import React from "react";

import { products } from "./seed";
import Product from "./Product";

export default function ProductList() {
  return (
    <div>
      <h1>Popular Products</h1>
      <Product />
      
    </div>
  );
}
