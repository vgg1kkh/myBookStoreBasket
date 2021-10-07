import React from 'react'

export const Book = ({item,index,onAdd,onDelete,onReduce}) => {
    return (
        <div>
             <li className="item-wrapper-box" key={item.id}>
                <ul className="item-wrapper" key={item.id}>
                  <li className="item-column">{index}</li>
                  <li className="item-column">{item.name}</li>
                  <li className="item-column">{item.date}</li>
                  <li className="item-column">{item.price}</li>
                  <li className="item-column">
                    <button onClick={() => onAdd(item.id)}>+</button>
                    <span>{item.number}</span>
                    <button {item.number===0? "disabled":null onClick={() => onReduce(item.id)}>-</button>
                  </li>
                  <li className="item-column">
                    <button onClick={() => onDelete(item.id * 1)}>
                      Remove
                    </button>
                  </li>
                </ul>
              </li>
        </div>
    )
}

export default Book
