import { motion } from 'framer-motion';
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
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="addButton"
          >
            <img src="/img/like-off.svg" alt="button" />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="addButton"
          >
            <img src="/img/button.svg" alt="button" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export { Item };
