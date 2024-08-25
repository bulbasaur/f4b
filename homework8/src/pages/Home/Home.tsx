import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchBooks } from '../../features/book/bookSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useAppSelector((state: any) => state.book.data);

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