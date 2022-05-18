import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShowBook from './pages/ShowBook';
import './App.css';



function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
      console.log("Use Effect")
    async function getData() {
      try {
        const res = await fetch('http://localhost:8080/books');  
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
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar data={books} />} />
        <Route path="/book/:bookid" element={<ShowBook/>} />
      </Routes>
    </Router>
  );
}

export default App;



