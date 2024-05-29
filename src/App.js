import { Header } from './components/Header';
import { Item } from './components/Item';
import { CardSidebar } from './components/CardSidebar';
function App() {
  return (
    <div className="wrapper">
      <CardSidebar />
      <Header />
      <div className="headLine">
        <h1>All comics</h1>
        <div className="search d-flex">
          <img width={18} src="/img/search.svg" alt="search" />{' '}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="container">
        {/* Item cards START */}
        <Item />
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
