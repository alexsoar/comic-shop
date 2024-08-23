import { motion } from 'framer-motion';
import styles from './Favorites.module.scss';

function Favorites({ onCloseFavorites, items = [], removeFromFavorites }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.cartSidebar}>
        <h2>Saved Items</h2>
        <motion.button
          onClick={onCloseFavorites}
          className={styles.removeButton}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
        >
          <img src="/img/remove_btn.svg" alt="removebtn" />
        </motion.button>
        {items.map((obj) => (
          <div key={obj.id} className={styles.cartItem}>
            <img width={70} src={obj.imageUrl} alt="cartimage" />
            <div className={styles.cartInfo}>
              <h2>{obj.title}</h2>
              <b>£ {obj.price}</b>
            </div>
            <motion.button
              className={styles.removeButton}
              onClick={() => removeFromFavorites(obj)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/img/remove_btn.svg" alt="removebtn" />
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Favorites };
