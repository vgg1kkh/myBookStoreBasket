

function App() {
  return <>
  <div class="box">
        <ul className="books-wrapper">
            <li className="item-wrapper">
              <ul className="item-detail">
                <li className="item-column">id</li>
                <li className="item-column">Book name</li>
                <li className="item-column">Released Date</li>
                <li className="item-column">Unit Price</li>
                <li className="item-column">Qty</li>
                <li className="item-column">Total Price</li>
              </ul>
            </li>
            <li>
                <li>Incredible Century</li>
                <li>$50</li>
                <li>1</li>
                <li>
                    <button>+</button>
                    <li>1</li>
                    <button>-</button>
                </li>
                <li>$50</li>
            </li>
            <li>
                <li>Dance Monkey</li>
                <li>$150</li>
                <li>3</li>
                <li>
                    <button>+</button>
                    <li>3</li>
                    <button>-</button>
                </li>
                <li>$450</li>
            </li>
            <li>
                <li>Harry Potter</li>
                <li>$20</li>
                <li>2</li>
                <li>
                    <button>+</button>
                    <li>2</li>
                    <button>-</button>
                </li>
                <li>$40</li>
            </li>
        </ul>
    </div>
  </>

  
}

export default App;
