import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <table className">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Title</td>
                            <td>Released Date</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Action</td>
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
