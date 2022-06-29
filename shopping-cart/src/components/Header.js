import React from "react";
import logo from '../img/favicon-season.png'
import { Link } from 'react-router-dom'

export default function Header(props){

  const {countCartItems} = props;

  return(
    <header className='row block center'>
      <div>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
      </div>
      <div className='titulo-site'>
        <h1>Lojinha da Season</h1>
      </div>
      <Link to='/basket'>
        <div className='cart-logo-bg'>
          <span className='cart-logo'>
            <i class="bi bi-cart"></i>
              {''}
              {countCartItems ? (
                <span className='cart-iten-count'>{countCartItems} </span>
              ) : ( ' '
            )}
          </span>
        </div>
      </Link>
    </header>
  )
}