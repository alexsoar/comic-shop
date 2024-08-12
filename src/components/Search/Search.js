import styles from './Search.module.scss';
function Search() {
  return (
    <div className={styles.headLine}>
      <div className={styles.slider}></div>
      <h1>All comics</h1>
      <div className={`${styles.search} d-flex`}>
        <img width={18} src="/img/search.svg" alt="search" />{' '}
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export { Search };
