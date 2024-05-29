import { motion } from 'framer-motion';
function CardSidebar() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="cartSidebar">
        <h2>Shopping basket</h2>
        <motion.button
          className="removeButton"
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
        >
          <img src="/img/remove_btn.svg" alt="removebtn" />
        </motion.button>
        <div className="cartItem">
          <img width={70} src="/img/posters/avengers.jpeg" alt="cartimage" />
          <div className="cartInfo">
            <h2>Avengers</h2>
            <b>£ 12</b>
          </div>
          <motion.button
            className="removeButton"
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.3 },
            }}
          >
            <img src="/img/remove_btn.svg" alt="removebtn" />
          </motion.button>
        </div>
        <div className="cartCheckout">
          <div className="sum">
            <p>Total:</p>
            <p>£ 12</p>
          </div>
          <div className="tax">
            <p>Tax 5%</p>
            <p>£ 0.6</p>
          </div>
          <motion.button
            className="btnCheckout"
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
