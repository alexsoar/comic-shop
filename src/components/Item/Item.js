import React from 'react';
import { motion } from 'framer-motion';
import styles from './Item.module.scss';
function Item(props) {
  const [Added, setAdded] = React.useState(false);
  const clickAddtoCartBtn = () => {
    setAdded(!Added);
  };
  const [AddFavorite, setAddFavorite] = React.useState(false);
  const clickLikeBtn = () => {
    setAddFavorite(!AddFavorite);
  };

  return (
    <div className={styles.item}>
      <img width={200} src={props.imageUrl} alt="" />
      <h2>{props.title}</h2>
      <div className={styles.itemBottom}>
        <div className={styles.price}>
          <span>Price:</span>
          <p>£ {props.price}</p>
        </div>
        <div className={styles.buttons}>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className={styles.addButton}
            onClick={clickLikeBtn}
          >
            <img
              src={AddFavorite ? '/img/like-on.svg' : '/img/like-off.svg'}
              alt="button"
            />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className={styles.addButton}
            onClick={clickAddtoCartBtn}
          >
            <img
              src={Added ? '/img/item-checked.svg' : '/img/button.svg'}
              alt="button"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export { Item };
