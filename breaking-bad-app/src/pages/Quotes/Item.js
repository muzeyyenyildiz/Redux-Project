import React from 'react'
import './style.css'

const Item = ({item}) => {
  return (
    <div key={item.id} className = "item-container">
       <q> {item.quote}</q> <small>{item.author}</small>
      </div>
  )
}

export default Item