import React from "react";
import Produtos from "./Produtos"
import styles from './Main.module.css'

//className={`base-input-class ${className1} ${className2}`} --> adiciona duas ou mais classes a uma seção

export default function Main(props){

  const {products, onAdd} = props;

  return(
    <main className={`base-input-class ${styles.block} ${styles.col_2}`}>
      <div className={styles.row}>
       {products.map((product) => (
        <Produtos key={product.id} product={product} onAdd={onAdd}> </Produtos>
       ))}
      </div>
    </main>
  )
}
