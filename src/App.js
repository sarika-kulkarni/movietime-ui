import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./app/routes/root";
import ErrorPage from './app/error';
import Movies from './app/routes/movies';
import Registration from './app/routes/registration';
import Theaters from './app/routes/theaters';
import MovieDetails from './app/routes/movieDetails';
import Booking from './app/routes/booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/theaters",
        element: <Theaters />
      },
      {
        path: "/register",
        element: <Registration />
      },
      {
        path: "/movieDetails",
        element: <MovieDetails />
      },
      {
        path: "/booking",
        element: <Booking />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
