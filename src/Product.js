import React from "react";

export default function Product({item}) {
  return (
    <div>
      
      <div className="Louies-DIV-for-Now">
        {console.log(item)}
        <div>
          <h1>{item.votes}</h1>
          {item.title}
        </div>
      </div>
    </div>
  );
}
