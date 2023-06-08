import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({productos}) {
  return (
    <div className="itemList">
       {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList