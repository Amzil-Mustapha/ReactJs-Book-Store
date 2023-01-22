import React from 'react'


export default function Book(props) {
  const {img, title, price} = props
  return (
    <article className='book'>
      <img src={img} alt= {'the' + title + 'image'} />
      <h1>{title}</h1>
      <h1>{price}</h1>
    </article>
  )
}
