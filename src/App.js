// * Libraries *
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// ─── ⋆⋅☆⋅⋆ ──

// * Components *
import { Header } from './components/Header/Header';
import { CardSidebar } from './components/CardSidebar/CardSidebar';
import { Favorites } from './components/Favorites/Favorites';
import { Search } from './components/Search/Search';
import { Slider } from './components/Slider/Slider';
// ─── ⋆⋅☆⋅⋆ ──

// * Pages *
import { Home } from './pages/Home';
import { SingleProduct } from './pages/SingleProduct';
// ─── ⋆⋅☆⋅⋆ ──

// * Context *
import { AppProvider } from './context/AppContext';
// ⸜(｡˃ ᵕ ˂ )⸝♡

function App() {
  // * useStates *
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);
  const [productList, setProductList] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');
  // ¯\_(ツ)_/¯

  const handleTotalPriceUpdate = (price) => {
    setTotalPrice(price);
  };

  const onAddToFavorites = (obj) => {
    const favoriteItem = { ...obj, id: uuidv4() };
    setFavoriteItems((prev) => [...prev, favoriteItem]);
  };

  const onRemoveFromFavorites = (obj) => {
    setFavoriteItems((prev) => prev.filter((item) => item.title !== obj.title));
  };

  const onAddToCart = (obj) => {
    const cartItem = { ...obj, id: uuidv4() };
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios
        .post('https://666043af5425580055b31258.mockapi.io/Cart', cartItem)
        .then((response) => {
          setCartItems((prev) => [...prev, response.data]);
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
        });
    }
  };

  const onRemoveFromCart = (obj) => {
    setCartItems((prev) => prev.filter((item) => item.title !== obj.title));

    axios
      .delete(`https://666043af5425580055b31258.mockapi.io/Cart/${obj.id}`)
      .catch((error) => {
        console.error('Error removing item from cart:', error);
        setCartItems((prev) => [...prev, obj]);
      });
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  React.useEffect(() => {
    axios
      .get('https://666043af5425580055b31258.mockapi.io/Items')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    axios
      .get('https://666043af5425580055b31258.mockapi.io/Cart')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const contextValue = {
    productList,
    cartItems,
    favoriteItems,
    totalPrice,
    searchValue,
    setSearchValue,
    onAddToCart,
    onRemoveFromCart,
    onAddToFavorites,
    onRemoveFromFavorites,
    onChangeSearchInput,
  };

  return (
    <AppProvider value={contextValue}>
      <div className="wrapper">
        {cartOpened && (
          <CardSidebar
            items={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveFromCart}
            onTotalPriceUpdate={handleTotalPriceUpdate}
          />
        )}
        {favoritesOpened && (
          <Favorites
            items={favoriteItems}
            onCloseFavorites={() => setFavoritesOpened(false)}
            removeFromFavorites={onRemoveFromFavorites}
          />
        )}
        <Header
          onClickCart={() => setCartOpened(true)}
          totalPrice={totalPrice}
          onClickFavorites={() => setFavoritesOpened(true)}
        />
        <Slider />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item" element={<SingleProduct />}></Route>
        </Routes>
        {/* <div className="container">
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
        </div> */}
      </div>
    </AppProvider>
  );
}

export default App;
