function Search() {
  return (
    <div className="headLine">
      <h1>All comics</h1>
      <div className="search d-flex">
        <img width={18} src="/img/search.svg" alt="search" />{' '}
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export { Search };
