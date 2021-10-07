import { useState } from "react";

import Book from './Book.jsx'
import "./App.css";
import "./reset.css";



function App() {
  const initialState = [
    { id: 3, name: "Math", date: "2020-09", price: 22, number: 1 },
    { id: 4, name: "English", date: "2010-01", price: 22, number: 4 },
    { id: 5, name: "History", date: "2021-03", price: 22, number: 3 },
  ];

  const [bookList, setBookList] = useState(initialState);

  const onAdd = (id) => {
    console.log(id);
    bookList.map(item=>(
      if(item.id === id){
        item.number +=1
      
    ))
    
  };

  const onReduce = (id) => {
    console.log(id);

  };

  const onDelete = (id) => {
    console.log(id);
    setBookList(bookList.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="box">
        <ul className="books-wrapper">
          <li className="item-wrapper-box">
            <ul className="item-wrapper">
              <li className="item-column">id</li>
              <li className="item-column">Book name</li>
              <li className="item-column">Released Date</li>
              <li className="item-column">Unit Price</li>
              <li className="item-column">Qty</li>
              <li className="item-column">Action</li>
            </ul>
          </li>
          { bookList.length > 0 ? bookList.map((item, index) => {
            return (
              <Book key={item.id} 
              item={item} 
              index={index}
              onDelete={onDelete}
              onAdd={onAdd}
              onReduce={onReduce}
              />
              // <li className="item-wrapper-box" key={item.id}>
              //   <ul className="item-wrapper" key={item.id}>
              //     <li className="item-column">{index}</li>
              //     <li className="item-column">{item.name}</li>
              //     <li className="item-column">{item.date}</li>
              //     <li className="item-column">{item.price}</li>
              //     <li className="item-column">
              //       <button onClick={() => onAdd(item.id)}>+</button>
              //       <span>{item.number}</span>
              //       <button onClick={() => onReduce(item.id)}>-</button>
              //     </li>
              //     <li className="item-column">
              //       <button onClick={() => onDelete(item.id * 1)}>
              //         Remove
              //       </button>
              //     </li>
              //   </ul>
              // </li>
            );
          }): "No DATA"}
          <div>Total: $300</div>
        </ul>
      </div>
    </>
  );
}

{
  /* <li className="item-wrapper">
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
</li> */
}
export default App;
