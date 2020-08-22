import React from "react";

import { products } from "./seed";
import Product from "./Product";

export default function ProductList() {
  return (
    <div>
      <h1 className="title">Popular Products</h1>
      <hr></hr>
      <Product vote={0} avatar={null}/>
    </div>
  );
}
