import React from 'react'

export default function Produtos(props) {

  const {product, onAdd} = props;

  return (
    <div className='card-prod'>
      <img className='img-small' src={product.image} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <button onClick={() => onAdd(product)} className='button'>Adicionar ao Carrinho</button>
    </div>
  )
}
