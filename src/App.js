import { Header } from './components/Header/Header';
import { Item } from './components/Item/Item';
import { CardSidebar } from './components/CardSidebar/CardSidebar';
import { Search } from './components/Search/Search';
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
  const [cartOpened, setCartOpened] = React.useState(false);
  const [productList, setproductList] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  React.useEffect(() => {
    fetch('https://666043af5425580055b31258.mockapi.io/Items')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setproductList(json);
      });
  });

  return (
    <div className="wrapper">
      {cartOpened ? (
        <CardSidebar
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Search />
      <div className="container">
        {/* Item cards START */}
        {productList.map((obj) => (
          <Item
            title={obj.title}
            imageUrl={obj.imageUrl}
            price={obj.price}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
        {/* Item cards END */}
      </div>
    </div>
  );
}

export default App;
