import React from "react";
import logo from '../img/favicon-season.png'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

//className={`base-input-class ${className1} ${className2}`} --> adiciona duas ou mais classes a uma seção


export default function Header(props){

  const {countCartItems} = props;

  return(
    <header className={`base-input-class ${styles.row} ${styles.block} ${styles.center} ${styles.header}`}>
      <div>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
      </div>
      <Link to='/'>
        <div className={styles.titulo_site}>
          <h1>Lojinha da Season</h1>
        </div>
      </Link>
      <Link to='/basket'>
        <div className={styles.cart_logo_bg}>
          <span className={styles.cart_logo}>
            <i class="bi bi-cart"></i>
              {''}
              {countCartItems ? (
                <span className={styles.cart_iten_count}>{countCartItems} </span>
              ) : ( ' '
            )}
          </span>
        </div>
      </Link>
    </header>
  )
}