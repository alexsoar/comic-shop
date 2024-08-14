import styles from './Header.module.scss';

function Header({ onClickCart, onClickFavorites }) {
  return (
    <header>
      <div className={styles.westSide}>
        <img width={150} src="/img/logo.jpg" alt="Logo" />
        <div className={styles.headerInfo}>
          <h3>Comics Shop</h3>
          <p>The best comics shop ever</p>
        </div>
      </div>
      <div className={styles.eastSide}>
        <ul className="d-flex">
          <li style={{ cursor: 'pointer' }} onClick={onClickCart}>
            <img width={18} alt="cart" src="/img/cart.svg" />
            <span>£ 0</span>
          </li>
          <li style={{ cursor: 'pointer' }} onClick={onClickFavorites}>
            <img width={18} alt="favorites" src="/img/favorites.svg" />
          </li>
          <li>
            <img width={18} alt="profile" src="/img/profile.svg" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export { Header };
