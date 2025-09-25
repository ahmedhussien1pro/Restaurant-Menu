import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavScroll from './Components/NavBar';
import MainTitle from './Components/MainTitle';
import Category from './Components/Category';
import ItemsList from './Components/Card';
import { items } from './Components/data';

function App() {
  const [itemsData, setItemsData] = useState(items);

  const AllCategories = ['الكل', ...new Set(items.map((i) => i.category))];

  const filteration = (cat) => {
    if (cat === 'الكل') {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  // ✅ Fixed Search
  const SearchFilter = (word) => {
    if (word.trim() === '') {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setItemsData(newArr);
    }
  };

  return (
    <div className='color-body font'>
      <NavScroll SearchFilter={SearchFilter} />
      <Container>
        <MainTitle />
        <Category filteration={filteration} AllCategories={AllCategories} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
