import {useState} from 'react'
import './App.css'
import './reset.css'

function App() {

  const [bookList, setBookList] = useState([{id:3,name:"Math",date:"2020-09"}])
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
          <div>Total: $300</div>
        </ul>
      </div>
    </>
  );
}

export default App;
