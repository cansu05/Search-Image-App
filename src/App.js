import "./App.css";
import SearchHeader from "./companent/SearchHeader";
import searchImages from './Api'
import {useState} from 'react'
import ImagesList from './companent/ImagesList'

function App() {
  
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
