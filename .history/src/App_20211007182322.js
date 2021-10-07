import React, { Component, createRef } from "react";
import { formatPrice } from "./format-util";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [
        { id: 3, name: "Math", date: "2020-09", price: 22, number: 1 },
        { id: 4, name: "English", date: "2010-01", price: 32, number: 4 },
        { id: 5, name: "History", date: "2021-03", price: 12, number: 3 },
      ],
    };
    this.myRef = React.createRef()
  }

//   onTotalPriceChange(e) {
//     console.log(e.target);
//   }

  onRemove(id) {
    this.setState({
      bookList: this.state.bookList.filter((item) => item.id !== id),
    });
  }

  getTotalPrice() {
    // this.state.bookList.reduce(
    //   (pre, item) => (pre = item.price * item.number + pre)
    // );
    let totalPrice = 0;
    for (let i of this.state.bookList) {
      totalPrice = i.price * i.number + totalPrice;
    }
    return totalPrice;
  }
  render() {
    return (
      <>
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
              {this.state.bookList.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{formatPrice(item.price)}</td>
                    <td>
                      <button>-</button>
                      <span className="book-qty">{item.number}</span>
                      <button>+</button>
                    </td>
                    <td>
                      <button onClick={() => this.onRemove(item.id)}>
                        REMOVE ITEM
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td ref={this.myRef} onChange={()=>this.changeBackground}>
                  {this.getTotalPrice()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
