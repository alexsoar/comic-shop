import { Item } from '../components/Item/Item';
import { ItemProvider } from '../context/ItemContext';
import { useAppContext } from '../context/AppContext';

function Home() {
  const {
    productList,
    searchValue,
    favoriteItems,
    cartItems,
    onAddToCart,
    onRemoveFromCart,
    onAddToFavorites,
    onRemoveFromFavorites,
  } = useAppContext();
  return (
    <div className="container">
      {productList
        .filter((item) => item.title.toLowerCase().includes(searchValue))
        .map((obj) => (
          <ItemProvider
            key={obj.id}
            value={{
              title: obj.title,
              description: obj.description,
              imageUrl: obj.imageUrl,
            }}
          >
            <Item
              key={obj.id}
              title={obj.title}
              imageUrl={obj.imageUrl}
              description={obj.description}
              price={obj.price}
              favoriteItems={favoriteItems}
              cartItems={cartItems}
              onPlus={() => onAddToCart(obj)}
              onRemove={() => onRemoveFromCart(obj)}
              addToFavorites={() => onAddToFavorites(obj)}
              removeFromFavorites={() => onRemoveFromFavorites(obj)}
            />
          </ItemProvider>
        ))}
    </div>
  );
}

export { Home };
