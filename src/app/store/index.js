import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../services/moviesApi';
import { registrationApi } from '../services/registrationApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { theatersApi } from '../services/theatersApi';
import { movieShowApi } from '../services/movieShowApi';
import selectionReducer from '../reducers/selection';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [movieShowApi.reducerPath]: movieShowApi.reducer,
        [theatersApi.reducerPath]: theatersApi.reducer,
        [registrationApi.reducerPath]: registrationApi.reducer,
        selection: selectionReducer 
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(moviesApi.middleware, movieShowApi.middleware, registrationApi.middleware, theatersApi.middleware);
    },
});

setupListeners(store.dispatch);