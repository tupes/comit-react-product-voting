import React,{useState} from "react";

export default function Product({products, handleVotes}) {
  return (
    <div>
        <div>
          <img src="" />
        </div>
        
        
      <div>
  
           {products.map(item => (
                <div key={item.id}> 
                    <span className="triangle" onClick={()=> handleVotes(item.id)}>▲</span> 
                    <span className="number">{item.votes}</span>
                    <div className="author"> 
                      <br></br>
                      <a>Fort Knight</a>
                     </div>
                </div>
            ))}
          
        </div>


        <div className="flex">
          <span>Submitted by:</span>	
          <img className="avatar" src={props.avatar} /> {/*avatar is a property*/}
        </div>
 </div>  
  );
}
