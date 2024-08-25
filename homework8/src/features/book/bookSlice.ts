import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks, getBook } from '../../services/harryPotterService';

interface BookState {
    data: Array<{}>;
}

const initialState: BookState = {
    data: [],
};

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async () => {
        return getBooks();
    }
);

export const fetchBook = createAsyncThunk(
    'book/fetchBook',
    async (index: string) => {
        return getBook(index);
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.data = [action.payload];
        });
    }
});

export default bookSlice.reducer;