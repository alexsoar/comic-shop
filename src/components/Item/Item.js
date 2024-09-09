import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import styles from './Item.module.scss';
function Item({
  title,
  imageUrl,
  price,
  onPlus,
  onRemove,
  addToFavorites,
  removeFromFavorites,
  cartItems,
  favoriteItems,
}) {
  const [Added, setAdded] = React.useState(false);
  React.useEffect(() => {
    const isItemInCart = cartItems.some((item) => item.title === title);
    setAdded(isItemInCart);
  }, [cartItems, title]);
  const clickAddtoCartBtn = () => {
    const newId = uuidv4();
    if (Added) {
      onRemove({ title, imageUrl, price });
    } else {
      onPlus({ id: newId, title, imageUrl, price });
    }
    setAdded(!Added);
  };
  const [AddFavorite, setAddFavorite] = React.useState(false);
  React.useEffect(() => {
    const isItemFavorite = favoriteItems.some((item) => item.title === title);
    setAddFavorite(isItemFavorite);
  }, [favoriteItems, title]);
  const clickLikeBtn = () => {
    if (AddFavorite) {
      removeFromFavorites({ title, imageUrl, price });
    } else {
      addToFavorites({ title, imageUrl, price });
    }
    setAddFavorite(!AddFavorite);
  };

  return (
    <div className={styles.item}>
      <Link to="/item">
        <img width={200} src={imageUrl} alt="" />
      </Link>
      <h2>{title}</h2>
      <div className={styles.itemBottom}>
        <div className={styles.price}>
          <span>Price:</span>
          <p>£ {price}</p>
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
