import { motion } from 'framer-motion';
import styles from './CardSidebar.module.scss';
function CardSidebar() {
  return (
    <div style={{ display: 'none' }} className={styles.overlay}>
      <div className={styles.cartSidebar}>
        <h2>Shopping basket</h2>
        <motion.button
          className={styles.removeButton}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
        >
          <img src="/img/remove_btn.svg" alt="removebtn" />
        </motion.button>
        <div className={styles.cartItem}>
          <img width={70} src="/img/posters/avengers.jpeg" alt="cartimage" />
          <div className={styles.cartInfo}>
            <h2>Avengers</h2>
            <b>£ 12</b>
          </div>
          <motion.button
            className={styles.removeButton}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.3 },
            }}
          >
            <img src="/img/remove_btn.svg" alt="removebtn" />
          </motion.button>
        </div>
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
