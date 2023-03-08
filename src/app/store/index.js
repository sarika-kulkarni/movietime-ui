import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../services/moviesApi';
import { registrationApi } from '../services/registrationApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { theatersApi } from '../services/theatersApi';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [theatersApi.reducerPath]: theatersApi.reducer,
        [registrationApi.reducerPath]: registrationApi.reducer 
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(moviesApi.middleware, registrationApi.middleware, theatersApi.middleware);
    },
});

setupListeners(store.dispatch);