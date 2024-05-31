import styles from './Header.module.scss';
function Header() {
  return (
    <header>
      <div className={styles.westSide}>
        <img width={150} src="/img/logo.jpg" alt="" />
        <div className={styles.headerInfo}>
          <h3>Comics Shop</h3>
          <p>The best comics shop ever</p>
        </div>
      </div>
      <div className={styles.eastSide}>
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
  );
}

export { Header };
