import React from 'react'


export default function Book(props) {
  const {img, title, Price} = props
  return (
    <article className='book'>
      <img src={img} alt= {'the' + title + 'image'} />
      <h1>{title}</h1>
      <h4>{Price}</h4>
    </article>
  )
}
