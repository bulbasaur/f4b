import axios from 'axios';

const HARRY_POTTER_BOOKS_API = 'https://potterapi-fedeperin.vercel.app/en/books';

const apiService = axios.create({
    baseURL: HARRY_POTTER_BOOKS_API,
});

export const getBooks = async () => {
    try {
        const response = await apiService.get('/');
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getBook = async (index: string) => {
    try {
        const response = await apiService.get(`?index=${index}`)

        // Add fantasy as a genre
        response.data.genre = 'Fantasy';
        response.data.rating = (Math.random() * 5).toFixed(2);

        return response.data;
    } catch (error) {
        return null;
    }
}