import {useState} from 'react'
import './App.css'
import './reset.css'

function App() {

  const initialState = [
    {id:3,name:"Math",date:"2020-09",price:22,number:1},
    {id:4,name:"English",date:"2010-01",price:22,number:4},
    {id:5,name:"History",date:"2021-03",price:22,number:3}
  ]

  const [bookList, setBookList] = useState(initialState)

  const onAdd = ()=>{

  }

  const onReduce = ()=> {

  }

  const onDelete = ()=> {

  }
  return (
    <>
      <div className="box">
        <ul className="books-wrapper">
          <li className="item-wrapper">

              <li className="item-column">id</li>
              <li className="item-column">Book name</li>
              <li className="item-column">Released Date</li>
              <li className="item-column">Unit Price</li>
              <li className="item-column">Qty</li>
              <li className="item-column">Action</li>

          </li>
          <li className="item-wrapper">

              <li className="item-column">1</li>
              <li className="item-column">Harry Potter</li>
              <li className="item-column">2011-09</li>
              <li className="item-column">$30</li>
              <li className="item-column">
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </li>
              <li className="item-column">
                <button>Remove</button>
              </li>
          </li>
          <li className="item-wrapper">
              <li className="item-column">2</li>
              <li className="item-column">Space Jam</li>
              <li className="item-column">2018-04</li>
              <li className="item-column">$20</li>
              <li className="item-column">
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </li>
              <li className="item-column">
                <button>Remove</button>
              </li>
          </li>
          {
            bookList.map((item,index)=>{
              return(
              <li className="item-wrapper" key= {item.id}>
              <li className="item-column">{index}</li>
              <li className="item-column">{item.name}</li>
              <li className="item-column">{item.date}</li>
              <li className="item-column">{item.price}</li>
              <li className="item-column">
                <button onClick={()=>onAdd(item.)}>+</button>
                <span>{item.number}</span>
                <button onClick={()=>onReduce()}>-</button>
              </li>
              <li className="item-column">
                <button onClick={onDelete}>Remove</button>
              </li>
          </li>
              )
            })
          }
          <div>Total: $300</div>
        </ul>
      </div>
    </>
  );
}

export default App;
