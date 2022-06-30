import React from 'react'
import empty from '../img/empty.png'
import styles from './Basket.module.css'

//className={`base-input-class` ${className1} ${className2}`} --> adiciona duas ou mais classes a uma seção

export default function Basket(props) {

  const {cartItems, onAdd, onRemove, clearCart} = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  //calcula o custo total dos produtos de acordo com a quantidade deles no carrinho
  //a: acumulador(soma de quantos itens há no carrinho) default=0 || c: current item:price * current item:quantity
 
  return (
    <section className={`base-input-class ${styles.block} ${styles.section_cart}`}>
      <div>
        <h2 className={styles.titulo_cart}>Meu Carrinho</h2>
      </div>
      <div>{cartItems.length === 0 && <img src={empty} className={styles.cart_img} alt='empty-cart'></img>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.row}>
          <div className={`base-input-class ${styles.col_2} ${styles.product_name}`}>
            {item.name}
          <hr/>
          </div>
          <div className={`base-input-class ${styles.buttons} ${styles.col_2}`}>
            <div>
              <button onClick={() => onAdd(item)} className={styles.btn_add}><i class="bi bi-plus-circle"></i></button>
            </div>
            <div>
              <button onClick={() => onRemove(item)} className={styles.btn_remove}><i class="bi bi-dash-circle"></i></button>
            </div>
          </div>
          <div className={`base-input-class ${styles.col_2} ${styles.text_right}`}>
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr/>
          <div className={styles.row}>
            <div className={styles.col_2}>
              <strong>No carrinho:</strong>
            </div>
            <div className={`base-input-class ${styles.col_1} ${styles.text_right}`}>
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </>
      )}
      <div className={styles.clear_bnt}>
        {cartItems.length >= 1 &&<button onClick={clearCart}>Limpar carrinho</button>}
      </div>
    </section>
  )
}