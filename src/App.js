function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="westSide">
          <img width={150} src="/img/logo.jpg" alt="" />
          <div className="headerInfo">
            <h3>Comic Shop</h3>
            <p>The best comic shop ever</p>
          </div>
        </div>
        <ul className="eastSide">
          <li>
            <img width={18} alt="cart" src="/img/cart.svg"></img>
            <span>1280 £</span>
          </li>
          <li>
            <img width={18} alt="favorites" src="/img/favorites.svg"></img>
            <span>favorites</span>
          </li>
          <li>
            <img width={18} alt="profile" src="/img/profile.svg"></img>
            <span>profile</span>
          </li>
        </ul>
      </header>
      <div className="container">
        <h1>All comics</h1>
        ...
      </div>
    </div>
  );
}

export default App;
