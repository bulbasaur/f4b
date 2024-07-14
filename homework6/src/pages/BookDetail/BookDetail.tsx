import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { getBook } from '../../services/harryPotterService'
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
        cover: '',
        genre: '',
        rating: ''
    });
    let { id } = useParams();

    useEffect(() => {
        if (!id) {
            throw new Error("No book id provided");
        } else {
            getBook(id).then(data => setBook(data));
        }
    }, []);

    if (!book) {
        return <h1>Book not found</h1>
    }

    return (
      <div>
        <Navigation />
    
        <h1>Book Details</h1>
        <div className="book-card">
            <h2>{book?.title}</h2>
            <p>{book?.author}</p>
            <p>{book?.description}</p>
            <img src={book?.cover}/>
            <p>{book?.genre}</p>
            <p>{book?.rating}</p>
        </div>
      </div>
    );
  };
  
  export default BookDetail;