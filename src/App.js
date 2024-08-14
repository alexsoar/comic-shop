import { Header } from './components/Header/Header';
import { Item } from './components/Item/Item';
import { CardSidebar } from './components/CardSidebar/CardSidebar';
import { Favorites } from './components/Favorites/Favorites';
import { Search } from './components/Search/Search';
import { Slider } from './components/Slider/Slider';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

// const productList = [
//   { title: 'Avengers', imageUrl: '/img/posters/avengers.jpeg', price: 12 },
//   { title: 'Iron Man', imageUrl: '/img/posters/ironman.jpeg', price: 10 },
//   { title: 'Superman', imageUrl: '/img/posters/superman.jpeg', price: 11 },
//   { title: 'Spiderman', imageUrl: '/img/posters/spiderman.jpeg', price: 24 },
//   { title: 'Green Arrow', imageUrl: '/img/posters/greenarrow.jpeg', price: 19 },
//   { title: 'Flash', imageUrl: '/img/posters/flash.jpeg', price: 15 },
//   {
//     title: 'Night Thrasher',
//     imageUrl: '/img/posters/nightthrasher.jpeg',
//     price: 10,
//   },
//   {
//     title: 'Captain America',
//     imageUrl: '/img/posters/captainamerica.jpeg',
//     price: 20,
//   },
// ];
function App() {
  // useStates start
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);
  const [productList, setproductList] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  //useStates end
  const handleTotalPriceUpdate = (price) => {
    setTotalPrice(price);
  };
  const onAddToFavorites = (obj) => {
    setFavoriteItems((prev) => [...prev, obj]);
  };
  const onRemoveFromFavorites = (obj) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
  };
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveFromCart = (obj) => {
    setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
  };

  React.useEffect(() => {
    fetch('https://666043af5425580055b31258.mockapi.io/Items')
      .then((result) => result.json())
      .then((json) => {
        const itemsWithId = json.map((item) => ({
          ...item,
          id: uuidv4(),
        }));
        setproductList(itemsWithId);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened ? (
        <CardSidebar
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
          onTotalPriceUpdate={handleTotalPriceUpdate}
        />
      ) : null}
      {favoritesOpened ? (
        <Favorites
          items={favoriteItems}
          onCloseFavorites={() => setFavoritesOpened(false)}
          removeFromFavorites={onRemoveFromFavorites}
        />
      ) : null}
      <Header
        onClickCart={() => setCartOpened(true)}
        totalPrice={totalPrice}
        onClickFavorites={() => setFavoritesOpened(true)}
      />
      <Slider />
      <Search />
      <div className="container">
        {productList.map((obj) => (
          <Item
            key={obj.id}
            title={obj.title}
            imageUrl={obj.imageUrl}
            price={obj.price}
            favoriteItems={favoriteItems}
            cartItems={cartItems}
            onPlus={() => onAddToCart(obj)}
            onRemove={() => onRemoveFromCart(obj)}
            addToFavorites={() => onAddToFavorites(obj)}
            removeFromFavorites={() => onRemoveFromFavorites(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
