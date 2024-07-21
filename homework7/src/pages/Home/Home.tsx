import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { getBooks } from '../../services/harryPotterService';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <div>
      <Navigation />
      <Box pb={2}>
        <h1>Home</h1>
      </Box>
      {books.map((book: any, index: number) => (
        <Box mb={6}>
          <Paper elevation={6}>
            <Grid container spacing={3} p={2}>
              <Grid item xs={12} md={4}>
                <a href={`books/${index}`}>{book.title}</a>
              </Grid>
              <Grid item xs={12} md={4}>
                {book.author}
              </Grid>
              <Grid item xs={12} md={4}>
                {book.rating}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </div>
  )
}

export default Home