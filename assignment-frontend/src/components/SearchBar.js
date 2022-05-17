import React,{useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";



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
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a key={value._id} className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
        
    </div>
  )
}

export default SearchBar