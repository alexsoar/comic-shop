import { motion } from 'framer-motion';
import styles from './CardSidebar.module.scss';
function CardSidebar({ onCloseCart, items = [], onRemove }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.cartSidebar}>
        <h2>Shopping basket</h2>
        <motion.button
          onClick={onCloseCart}
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
              onClick={() => onRemove(obj)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/img/remove_btn.svg" alt="removebtn" />
            </motion.button>
          </div>
        ))}
        <div className={styles.cartCheckout}>
          <div className={styles.sum}>
            <p>Total:</p>
            <p>£ 12</p>
          </div>
          <div className={styles.tax}>
            <p>Tax 5%</p>
            <p>£ 0.6</p>
          </div>
          <motion.button
            className={styles.btnCheckout}
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
  );
}

export { CardSidebar };
