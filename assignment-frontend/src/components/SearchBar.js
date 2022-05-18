import React,{useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';



function SearchBar({data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [text, settext] = useState("");

    const handleChange=(e)=>{
        const word=e.target.value;
        settext(word);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(word.toLowerCase());
          });
      
          if (word === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
    }

    const clearInput = () => {
        setFilteredData([]);
        settext("");
      };

  return (
    <div  className='searchBar'>
        <div className='searchBox'>
        <input 
         type="text"
          className='inputBox'
          onChange={handleChange} 
          value={text}/>
        <div className='searchIcon'>
        { text==="" ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}

        </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((book) => {
            return (
              <Link to={`/book/${book._id}`} key={book._id}>
                <div className="dataItem"> 
                  <img src={book.imageLink} alt="" className='image' />        
                  <h5>{ book.title }</h5>
                </div>
              </Link>
            );
          })}
        </div>
      )}
        
    </div>
  )
}

export default SearchBar