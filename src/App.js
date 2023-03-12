import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./app/routes/root";
import ErrorPage from './app/error';
import Movies from './app/routes/movies';
import Registration from './app/routes/registration';
import Theaters from './app/routes/theaters';
import MovieDetails from './app/routes/movieDetails';
import Booking from './app/routes/booking';
import Login from './app/routes/login';

const router = createBrowserRouter([
  {
    path: "/movietime",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/movietime/movies",
        element: <Movies />
      },
      {
        path: "/movietime/theaters",
        element: <Theaters />
      },
      {
        path: "/movietime/register",
        element: <Registration />
      },
      {
        path: "/movietime/movieDetails",
        element: <MovieDetails />
      },
      {
        path: "/movietime/booking",
        element: <Booking />
      },
      {
        path: "/movietime/login",
        element: <Login />
      }
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
