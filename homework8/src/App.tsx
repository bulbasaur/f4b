import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetail/BookDetail";
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#67be23",
      contrastText: "#fff",
    },
    secondary: {
        main: "#2A132E",
        contrastText: "#fff",
    },
    background: {
        default: "#f0f0f0",
        paper: "#ffffff",
    },
  },
});

function App() {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Container fixed maxWidth="lg">
            <Routes>
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/" element={<Home />} />
              <Route path="/books/:id" element={<BookDetails />} errorElement={<h1>Not Found</h1>}/>
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
