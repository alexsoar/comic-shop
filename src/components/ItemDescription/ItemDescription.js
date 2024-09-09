import styles from './ItemDescription.module.scss';

function ItemDescription({
  title,
  imageUrl,
  description,
  published,
  writer,
  penciller,
  coverArtist,
  price,
}) {
  console.log('Props in ItemDescription:', { title, imageUrl });
  return (
    <div className={styles.glassEffect}>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/img/posters/immortal-thor-desktop.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minWidth: '335px',
          height: '500px',
        }}
        className={styles.itemDescriptionContainer}
      >
        <div>
          <img width={250} src={imageUrl} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <div style={{ color: '#fff' }}>{published}</div>
        </div>
      </div>
    </div>
  );
}

export { ItemDescription };
