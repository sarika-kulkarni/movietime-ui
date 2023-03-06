import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../services/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(moviesApi.middleware);
    },
});

setupListeners(store.dispatch);