import React from 'react'
import notfound from '../img/notfound.png'
import styles from './Produtos.module.css'

//className={`base-input-class ${className1} ${className2}`} --> adiciona duas ou mais classes a uma seção

export default function Produtos(props) {

  const {product, onAdd} = props;

  return (
    <div className={styles.card_prod}>
      {/*<img className='img-small' src={product.image} alt={product.name}/>*/}
      <img className={styles.img_small} src={notfound} alt='wow_such_empty'></img>
      {/*adicionei essa imagem na linha 11 só pra embelezar a página, o código correto está comentado na linha 10 */}
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <button onClick={() => onAdd(product)} className={styles.button}>Adicionar ao Carrinho</button>
    </div>
  )
}
