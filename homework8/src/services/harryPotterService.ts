import axios from 'axios';

const HARRY_POTTER_BOOKS_API = 'https://potterapi-fedeperin.vercel.app/en/books';

const apiService = axios.create({
    baseURL: HARRY_POTTER_BOOKS_API,
});

export const getBooks = async () => {
    try {
        const response = await apiService.get('/');
        let books = response.data;

        books = books.map((book: any, index: number) => {
            book.author = 'J.K. Rowling';
            book.genre = 'Fantasy';
            book.rating = (Math.random() * 5).toFixed(2);

            return book;
        });

        return books;
    } catch (error) {
        return [];
    }
}

export const getBook = async (index: string) => {
    try {
        const response = await apiService.get(`?index=${index}`)

        response.data.author = 'J.K. Rowling';
        response.data.genre = 'Fantasy';
        response.data.rating = (Math.random() * 5).toFixed(2);

        return response.data;
    } catch (error) {
        return null;
    }
}