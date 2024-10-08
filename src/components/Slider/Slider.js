import styles from './Slider.module.scss';
import { motion } from 'framer-motion';

function Slider() {
  const scrollToSection = () => {
    const section = document.getElementById('targetSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/posters/immortal-thor-desktop.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minWidth: '335px',
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
        onClick={scrollToSection}
      >
        Read now!
      </motion.button>
    </div>
  );
}

export { Slider };
