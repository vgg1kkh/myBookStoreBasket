

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
                <li className="item-column">Action</li>
              </ul>
            </li>
            <li className="item-wrapper">
              <ul className="item-detail">
                <li className="item-column">1</li>
                <li className="item-column">Harry Potter</li>
                <li className="item-column">2011-09</li>
                <li className="item-column">$30</li>
                <li className="item-column">
                  1</li>
                <li className="item-column">
                  <button>+</button>

                </li>
              </ul>
            </li>
            
                
            
        </ul>
    </div>
  </>

  
}

export default App;
