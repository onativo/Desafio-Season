import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App(){

  const [cartItems, setCartItems] = useState([])

  //função que adiciona produtos ao carrinho
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id); //procura um produto no carrinho que tem o id igual o id do produto a ser adicionado
    if (exist){                                             //se esse produto existe no carrinho
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)) //daí adiciona mais um produto do mesmo id(qty = quantity)
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])  ///se é a primeira vez a ser adicinado um produto com tal id no carrinho, então ele começará com 1
    }
  }

  //remove algum item do carrinho
  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id); //se o item com o id correspondente existe no carrinho
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))//se existe mais de 1 então remove -1
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, []);

  //função async que busca os dados da API
  async function getProducts(){
    try{
      const res = await fetch('https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products');
      const data = await res.json();
      setProducts(data);
    }catch(err){
      console.error(err);
  }
}

  return(
    <div className='App'>
      <Router>
      <Header countCartItems={cartItems.length}/>
        <Routes>
          <Route path='/' element={
            <div className='row'>
              <Main
                onAdd={onAdd}
                products={products}
              />
            </div>}
          />
          <Route path='/basket' element={
            <div className='row'>
              <Basket
                onRemove={onRemove}
                onAdd={onAdd}
                cartItems={cartItems}
              />
            </div>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
