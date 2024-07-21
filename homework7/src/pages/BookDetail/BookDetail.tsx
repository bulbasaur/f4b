import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { getBook } from '../../services/harryPotterService'
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import './BookDetails.css';

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
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      <Box pb={2}>
        <h1>Book Details</h1>
      </Box>
      <Paper elevation={6}>
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} md={4}>
            <img src={book?.cover} />
          </Grid>
          <Grid item xs={12} md={8}>
            <h2>{book?.title}</h2>
            <h3>{book?.author}</h3>
            <p>{book?.description}</p>
            <Grid container spacing={2}>
              <Grid item>
                <Chip label={`Genre: ` + book?.genre} />
              </Grid>
              <Grid item>
                <Chip label={`Rating: ` + book?.rating} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookDetail;