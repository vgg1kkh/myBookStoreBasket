

function App() {
  return <>
  <div class="box">
        <ul className="books-wrapper">
            <li className="item-wrapper">
              <ul className="item-detail">
                <li cl>id</li>
                <li cl>Book name</li>
                <li cl>Price</li>
                <li cl>Qty</li>
                <li cl>Action</li>
                <li cl>Total Price</li>
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
