import React from 'react'

export default function Product({ products, handleVotes }) {
  return (
    <div>

      <div>
        {products.map((item) => (
          <div key={item.id} className="itemRow">
            <div className="bigAvatar">
              <img src='' alt='bigAvatar'/> {/* @Alexandr  */}
            </div>
            <div className="itemContents">
              <span className='triangle' onClick={() => handleVotes(item.id)}>
                ▲
              </span>
              <span className='number'>{item.votes}</span>
              <div className='author'>
                <br />
                <a href="#">{item.title}</a>
                <p className='description'>{item.description}</p>
              </div>
              <div>
                <span className='submit'>Submitted by:</span><span className="smallAvatar"><img src='' alt='smallAvatar'/></span>
                {/* <img className='avatar' src={props.avatar} /> /*avatar is a property  @Reema */}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
