import React from 'react'
import './Listitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function ListItems(props) {
    const items=props.items;
    const listItems=items.map(item=>{// to call each of the item in the array
     return (<FlipMove className='flipedit'>
     <div className='list' key={item.key}>
        <p> {item.text}
        <span>
            <FontAwesomeIcon className='faicons' icon='trash' onClick={()=>{props.deleteItem(item.key);}} />
        </span></p>
        
     </div>
     </FlipMove>
     );
    } )

    return (
    <div>{listItems}</div>
  )
}

export default ListItems