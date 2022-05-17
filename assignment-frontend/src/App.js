import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';


function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
      console.log("Use Effect")
    async function getData() {
      try {
        const res = await fetch('http://localhost:8080/products');  
        const data = await res.json();
        setBooks(data);
      }
      catch (e) {
        console.log(e.message);
      }
    }
    getData();

  },[]);

  return (
    <div className="App">
      <SearchBar data={books}></SearchBar>
    </div>
  );
}

export default App;
