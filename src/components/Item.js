function Item() {
  return (
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
  );
}

export default Item;
