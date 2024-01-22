import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function LineItem({ item, handleChange, handleDelete }){
  return (
    // can remove the key attribute here since now we have that in LineItem
    <li className="item">
        <input 
            onChange={()=>handleChange(item.id)}
            type="checkbox" 
            checked={item.checked} 
        />
        <label style={(item.checked)?{textDecoration: "line-through"}: null}> {item.item} </label> &nbsp;
        < FaTrashAlt
            onClick={()=>handleDelete(item.id)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem