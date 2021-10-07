import { useState } from "react";
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
  };

  const onReduce = (id) => {
    console.log(id);
  };

  const onDelete = (id) => {
    console.log(id);
    setBookList(bookList.filter((item) => item.id !== id))
  };
  return (
    <>
      <div className="box">
        <ul className="books-wrapper">
   
          {bookList.map((item, index) => {
            return (
              <li className="item-wrapper-box" key={item.id}>
                <ul className="item-wrapper" key={item.id}>
                <li className="item-column">{index}</li>
                <li className="item-column">{item.name}</li>
                <li className="item-column">{item.date}</li>
                <li className="item-column">{item.price}</li>
                <li className="item-column">
                  <button onClick={() => onAdd(item.id)}>+</button>
                  <span>{item.number}</span>
                  <button onClick={() => onReduce(item.id)}>-</button>
                </li>
                <li className="item-column">
                  <button onClick={() => onDelete(item.id * 1)}>Remove</button>
                </li>
                </ul>
              </li>
            );
          })}
          <div>Total: $300</div>
        </ul>
      </div>
    </>
  );
}

export default App;
