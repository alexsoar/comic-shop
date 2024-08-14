import styles from './Slider.module.scss';
import { motion } from 'framer-motion';

function Slider() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/posters/immortal-thor-desktop.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '500px',
        borderRadius: '30px',
      }}
      className={styles.sliderContainer}
    >
      <h1>The Roxxon Age of Marvel Comics Begins</h1>
      <motion.button
        className={styles.btnCheckout}
        whileHover={{
          scale: 1.1,
          backgroundColor: '#fff',
          color: '#fff',
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0], transition: { duration: 0.5 } }}
      >
        Read now!
      </motion.button>
    </div>
  );
}

export { Slider };
