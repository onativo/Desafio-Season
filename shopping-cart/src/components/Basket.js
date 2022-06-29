import React from 'react'

export default function Basket(props) {

  const {cartItems, onAdd, onRemove} = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  //calcula o custo total dos produtos de acordo com a quantidade deles no carrinho
  //a: acumulador(soma de quantos itens há no carrinho) default=0 || c: current item:price * current item:quantity

  return (
    <aside className="block col-1">
      <div>
        <h2 className="titulo-cart">Meu Carrinho</h2>
      </div>
      <div>{cartItems.length === 0 && <div className="cart-subtitle">O carrinho está vazio</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2 product-name">
            {item.name}
          <hr/>
          </div>
          <div className="col-2 buttons">
            <div>
              <button onClick={() => onAdd(item)} className="btn-add"><i class="bi bi-plus-circle"></i></button>
            </div>
            <div>
              <button onClick={() => onRemove(item)} className="btn-remove"><i class="bi bi-dash-circle"></i></button>
            </div>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr/>
          <div className='row'>
            <div className='col-2'>
              <strong>No carrinho:</strong>
            </div>
            <div className='col-1 text-right'>
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </aside>
  )
}