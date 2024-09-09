function App() {
  return (
    <div className="app">
      <section id="content">
        <header>

          <div className="">
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All Products</button>
              <button>Wishlist</button>
            </nav>

            <form>
              <input type="search" placeholder="search"/>
              <button type="button">Go</button>
            </form>
          </div>

        </header>

        <main>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e57a2df2790409eaa8387e383797a9c_9366/sl-72-rtn-shoes.jpg" className="" alt=""/>
            <p className="pr-name">Shoe 1</p>
            <p className="pr-price">$4444</p>
          </div>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ffc5eb4cf17a4f0f921b8c17f18409f5_9366/sl-72-rtn-shoes.jpg" className="" alt="Shoe"/>
            <p className="pr-name">Shoe 2</p>
            <p className="pr-price">$4444</p>
          </div>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/36c71e7188394d00b4b87b33fae0e0b2_9366/sl-72-rs-elastic-laces-shoes-kids.jpg" className="" alt="Shoe"/>
            <p className="pr-name">Shoes 3</p>
            <p className="pr-price">$4444</p>
          </div>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/531e36e83ef04ade99d9f25b448b5b33_9366/sl-72-rs-shoes.jpg" className="" alt="Shoe"/>
            <p className="pr-name">Shoe 4</p>
            <p className="pr-price">$4444</p>
          </div>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff24e857891a4527bcb54146cc6f1f1d_9366/sl-72-rs-shoes-kids.jpg" className="" alt="Shoe"/>
            <p className="pr-name">Shoe 5</p>
            <p className="pr-price">$4444</p>
          </div>

          <div className="product">
            <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f594f763c62540d7bc5f88e2d27decc5_9366/sl-72-og-shoes.jpg" className="" alt="Shoe"/>
            <p className="pr-name">Shoes 6</p>
            <p className="pr-price">$4444</p>
          </div>
          
        </main>

        <footer>

          <div>
            <h3>Who we are</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Social</a></li>
            </ul>
          </div>

          <div>
            <h3>Policy</h3>
            <ul>
              <li><a href="">Terms and Conditions</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Return</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Products</h3>
            <ul>
              <li><a href="">Home Page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>

        </footer>
      </section>

    </div>
  );
}

export default App;
