import React, { Component } from "react";
import { formatPrice } from "./format-util";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [
        { id: 3, name: "Math", date: "2020-09", price: 22, number: 1 },
        { id: 4, name: "English", date: "2010-01", price: 22, number: 4 },
        { id: 5, name: "History", date: "2021-03", price: 22, number: 3 },
      ],
    };
  }
  render() {
    return (<>
      <div>
        <table className="table-wrapper">
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Released Date</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookList.map((item,index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{formatPrice(item.price)}</td>
                  <td>
                      <button>-</button>
                      <span className="book-qty">{item.number}</span>
                      <button>+</button>
                  </td>
                  <td>
                    <button>REMOVE ITEM</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>Total: $100</div>
      </>
    );
  }
}
