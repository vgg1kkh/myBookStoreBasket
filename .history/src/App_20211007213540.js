import React, { Component } from "react";
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
      newBookName: "",
      newBookDate: "",
      newBookPrice: 0,
      number: 1,
    };
  }

  onAdd(e, id) {
    const updBookList = this.state.bookList.map((item) => {
      if (item.id === id) {
        item.number += 1;
      }
      if (item.number === 1) {
      }
      return item;
    });
    this.setState({ bookList: updBookList });
  }

  onReduce(e, id) {
    const updBookList = this.state.bookList.map((item) => {
      if (item.id === id) {
        if (item.number === 1) {
          e.target.disabled = true;
        }
        item.number -= 1;
      }
      return item;
    });
    this.setState({ bookList: updBookList });
  }

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

  createNewItem(e, type) {
    switch (type) {
      case "name":
        this.setState({ newBookName: e.target.value });
        break;
      case "date":
        this.setState({ newBookDate: e.target.value });
        break;
      case "price":
        this.setState({ newBookPrice: e.target.value });
        break;
      case "number":
        this.setState({ newBookNumber: e.target.value });
        break;
      default:
        break;
    }
    console.log(e.target.value);
  }
  renderBooks() {
    return this.state.bookList.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{formatPrice(item.price)}</td>
          <td>
            <button
              disabled={item.number < 1 ? true : false}
              onClick={(e) => this.onReduce(e, item.id)}
            >
              -
            </button>
            <span className="book-qty">{item.number}</span>
            <button onClick={(e) => this.onAdd(e, item.id)}>+</button>
          </td>
          <td>
            <button onClick={() => this.onRemove(item.id)}>REMOVE ITEM</button>
          </td>
        </tr>
      );
    });
  }

  renderEmyptTip() {
    return <button>Add Item</button>;
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
              {this.state.bookList.length > 0
                ? this.renderBooks()
                : this.renderEmyptTip()}
              <tr>
                <td>
                  <button>Hide</button>
                </td>
                <td>
                  <input
                    className="add-new-item"
                    onChange={(e) => this.createNewItem(e, "name")}
                  />
                </td>
                <td>
                  <input 
                    className="add-new-item"
                    onChange={(e) => this.createNewItem(e, "date")}
                  />
                </td>
                <td>
                  <input type="number"
                    className="add-new-item"
                    onChange={(e) => this.createNewItem(e, "price")}
                  />
                </td>
                <td>
                  <input type="number"
                    className="add-new-item"
                    onChange={(e) => this.createNewItem(e, "number")}
                  />
                </td>
                <td>
                  <button onClick={this.addNew}>Add</button>
                </td>
              </tr>
              <tr
                style={{
                  display: this.state.bookList.length > 0 ? "" : "none",
                }}
              >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>{formatPrice(this.getTotalPrice())}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
