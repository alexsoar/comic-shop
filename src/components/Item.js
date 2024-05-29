function Item(props) {
  return (
    <div className="item">
      <img width={200} src={props.imageUrl} alt="" />
      <h2>{props.title}</h2>
      <div className="itemBottom">
        <div className="price">
          <span>Price:</span>
          <p>£ {props.price}</p>
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

export { Item };
