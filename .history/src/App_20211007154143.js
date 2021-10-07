import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

    constructor(){
        this.state= {}
    }
    render() {
        return (
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
                        <tr>
                            <td>1</td>
                            <td>English</td>
                            <td>2010-10</td>
                            <td>$20</td>
                            <td>2</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
