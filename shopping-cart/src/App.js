import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './components/data';
import { useState } from 'react';

function App(){

  const [cartItems, setCartItems] = useState([])

  const {products} = data;

    //função que adiciona produtos ao carrinho
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id); //procura um produto no carrinho que tem o id igual o id do produto a ser adicionado
    if (exist){                                             //se esse produto existe no carrinho
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)) //daí adiciona mais um produto do mesmo id(qty = quantity)
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])  ///se é a primeira vez a ser adicinado um produto com tal id no carrinho, então ele começará com 1
    }
  }

  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }

  return(
    <div className='App'>
      <Header></Header>
      <div className='row'>
        <Main 
          onAdd={onAdd}
          products={products}>
        </Main>
        <Basket 
          onRemove={onRemove}
          onAdd={onAdd}
          cartItems={cartItems}>

        </Basket>
      </div>
    </div>
  )
}

export default App;
