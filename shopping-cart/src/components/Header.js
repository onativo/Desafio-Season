import React from "react";
import logo from '../img/favicon-season.png'

export default function Header(props){
  return(
    <header className='row block center'>
      <div>
        <img src={logo}></img>
      </div>
      <div className='titulo-site'>
        <a href='#'></a>
        <h1>Lojinha da Season</h1>
      </div>
    </header>
  )
}