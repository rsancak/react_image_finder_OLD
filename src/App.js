import './App.css';
import { useState } from 'react';
import Header from './layouts/Header';
import Api from './search/Api';
import List from './search/List';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await Api(term);
    setImages(result);
  };
  return (
    <div className="App">
      <Header searchData={handleSubmit} />
      <List imagesPlaceholder={images} />
    </div>
  );
}

export default App;
