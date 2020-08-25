import React, { useState } from 'react'

export default function Product({ products, handleVotes }) {

  return (
    <div>
      <div>
        <img className="avatar" src='' /> {/* @Alexandr  */}
      </div>

      <div>
        {products.map((item) => (
          <div key={item.id}>
            <span className='triangle' onClick={() => handleVotes(item.id)}>
              ▲
            </span>
            <span className='number'>{item.votes}</span>
            <div className='author'>
              <br />
              <a href="#">{item.title}</a>
              <p className='description'>{item.description}</p>
              <br />
            </div>
              <div className='flex'>
                <span className='submit'>Submitted by:</span>
                <img className='avatar' src={item.submitterAvatarUrl} alt="img" />
              </div>
          </div>
        ))}
      </div>

    </div>
  )
}
