import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetail/BookDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} errorElement={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
