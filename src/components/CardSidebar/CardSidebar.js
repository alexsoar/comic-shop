import React from 'react';
import { motion } from 'framer-motion';
import styles from './CardSidebar.module.scss';

function CardSidebar({
  onCloseCart,
  items = [],
  onRemove,
  onTotalPriceUpdate,
}) {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const total = calculateTotal();
  const tax = total * 0.05;

  React.useEffect(() => {
    onTotalPriceUpdate(total);
  }, [items, onTotalPriceUpdate, total]);

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
        {items.length > 0 ? (
          <div className={styles.cartCheckout}>
            <div className={styles.sum}>
              <p>Total:</p>
              <p>£ {total.toFixed(2)}</p>
            </div>
            <div className={styles.tax}>
              <p>Tax 5%</p>
              <p>£ {tax.toFixed(2)}</p>
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
        ) : (
          <div className={styles.emptyCart}>
            <img src="/img/cart-empty.svg" alt="cartempty" />
            <h3>The Basket is empty</h3>
            <p>Add at least one item to place an order.</p>
            <motion.button
              className={styles.btnEmptyCart}
              onClick={onCloseCart}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#007bff',
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -10, 0], transition: { duration: 0.5 } }}
            >
              <img
                style={{ paddingRight: '10px' }}
                src="/img/arrow-left.svg"
                alt="arrowleft"
              />{' '}
              Return Back
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}

export { CardSidebar };
