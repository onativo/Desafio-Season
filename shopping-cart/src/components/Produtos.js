import React from 'react'
import notfound from '../img/notfound.png'

export default function Produtos(props) {

  const {product, onAdd} = props;

  return (
    <div className='card-prod'>
      {/*<img className='img-small' src={product.image} alt={product.name}/>*/}
      <img className='img-small' src={notfound}></img>
      {/*adicionei essa imagem na linha 11 só pra embelezar a página, o código correto está comentado na linha 10 */}
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <button onClick={() => onAdd(product)} className='button'>Adicionar ao Carrinho</button>
    </div>
  )
}
