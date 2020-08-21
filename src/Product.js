import React from "react";

export default function Product({products, handleVotes}) {
  return (
    <div>
        <div>
          <img src="" />
        </div>
        
        
      <div className="Louies-DIV-for-Now">
  
           {products.map(item => (
                <div key={item.id}> 
                    <button onClick={()=> handleVotes(item.id)}>ARROW UP</button><span style={{padding: '.5em'}} >{item.votes}</span>
                </div>
            ))}
          
        </div>


        <div>
          <span>Submitted by:</span>	
          <img src="" />
        </div>
 </div>  
  );
}
