import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = () => {

    const { bookid } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
       
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8080/book/${bookid}`);
                const data = await res.json();
                setBook(data);
            }
            catch (e) {
                console.log("Cannot fetch the data at the moment!");
            }
           
        }

        getData();

    },[]);


    return (
        <div>
            {book && <div>
                <h1>{book.title}</h1>
            </div>}
      </div>
    )
}

export default ShowBook;