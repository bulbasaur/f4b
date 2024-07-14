import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { getBooks } from '../../services/harryPotterService'

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <div>
        <Navigation />
        <h1>Home</h1>

        <ul>
          {books.map((book: any, index: number) => (
            <li key={index}>
              <a href={`books/${index}`}>{book.title}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}
 
export default Home