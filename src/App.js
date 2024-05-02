function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="westSide">
          <img width={150} src="/img/logo.jpg" alt="" />
        </div>
        <div className="headerInfo">
          <h3>Comic Shop</h3>
          <p>The best comic shop ever</p>
        </div>
        <ul className="eastSide">
          <li>
            <svg></svg>
          </li>
          <li>
            <span>1280 £</span>
          </li>
          <li>
            <svg></svg>
          </li>
          <li>
            <span>favorites</span>
          </li>
          <li>
            <svg></svg>
          </li>
          <li>
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
