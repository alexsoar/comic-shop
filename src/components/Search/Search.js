import styles from './Search.module.scss';
function Search({ searchValue, setSearchValue, onChangeSearchInput }) {
  return (
    <div className={styles.headLine}>
      <h1 id="targetSection">
        {searchValue ? `Search on Request` : 'All comics'}
      </h1>
      <div className={`${styles.search} d-flex`}>
        <img width={18} src="/img/search.svg" alt="search" />{' '}
        <input
          value={searchValue}
          onChange={onChangeSearchInput}
          type="text"
          placeholder="Search"
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue('')}
            style={{ width: 20, height: 20 }}
            src="/img/remove_btn.svg"
            alt="removebtn"
          />
        )}
      </div>
    </div>
  );
}

export { Search };
