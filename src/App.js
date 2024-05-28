import { motion } from 'framer-motion';
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cartSidebar">
          <h2>Shopping basket</h2>
          <motion.button
            className="addButton"
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.3 },
            }}
          >
            <img src="/img/remove_btn.svg" alt="removebtn" />
          </motion.button>
          <div className="cartItem">
            <img width={70} src="/img/posters/avengers.jpeg" alt="cartimage" />
            <div className="cartInfo">
              <h2>Avengers</h2>
              <b>£ 12</b>
            </div>
            <motion.button
              className="addButton"
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/img/remove_btn.svg" alt="removebtn" />
            </motion.button>
          </div>
          <div className="cartCheckout">
            <div className="sum">
              <p>Total:</p>
              <p>£ 12</p>
            </div>
            <div className="tax">
              <p>Tax 5%</p>
              <p>£ 0.6</p>
            </div>
            <motion.button
              className="btnCheckout"
              whileHover={{
                scale: 1.1,
                backgroundColor: '#007bff',
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -10, 0], transition: { duration: 0.5 } }}
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </div>
      </div>
      <header>
        <div className="westSide">
          <img width={150} src="/img/logo.jpg" alt="" />
          <div className="headerInfo">
            <h3>Comics Shop</h3>
            <p>The best comics shop ever</p>
          </div>
        </div>
        <div className="eastSide">
          <ul className="d-flex">
            <li>
              <img width={18} alt="cart" src="/img/cart.svg"></img>
              <span>1280 £</span>
            </li>
            <li>
              <img width={18} alt="favorites" src="/img/favorites.svg"></img>
            </li>
            <li>
              <img width={18} alt="profile" src="/img/profile.svg"></img>
            </li>
          </ul>
        </div>
      </header>
      <div className="headLine">
        <h1>All comics</h1>
        <div className="search d-flex">
          <img width={18} src="/img/search.svg" alt="search" />{' '}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="container">
        {/* Item cards START */}
        <div className="item">
          <img width={200} src="/img/posters/avengers.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <div className="buttons">
              <button className="addButton">
                <img src="/img/like-off.svg" alt="button" />
              </button>
              <button className="addButton">
                <img src="/img/button.svg" alt="button" />
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/ironman.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/superman.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/spiderman.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/greenarrow.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/flash.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/nightthrasher.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        <div className="item">
          <img width={200} src="/img/posters/captainamerica.jpeg" alt="" />
          <h2>Avengers</h2>
          <div className="itemBottom">
            <div className="price">
              <span>Price:</span>
              <p>12£</p>
            </div>
            <button className="addButton">
              <img src="/img/button.svg" alt="button" />
            </button>
          </div>
        </div>
        {/* Item cards END */}
      </div>
    </div>
  );
}

export default App;
