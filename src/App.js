import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./app/routes/root";
import ErrorPage from './app/error';
import Movies from './app/routes/movies';
import Registration from './app/routes/registration';
import Theaters from './app/routes/theaters';
import MovieDetails from './app/routes/movieDetails';
import Login from './app/routes/login';
import MyBookings from './app/routes/mybookings';
import BookShow from './app/routes/bookShow';
import MyProfile from './app/routes/myProfile';

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
        element: <BookShow />
      },
      {
        path: "/movietime/mybookings",
        element: <MyBookings />
      },
      {
        path: "/movietime/login",
        element: <Login />
      },
      {
        path: "/movietime/myprofile",
        element: <MyProfile />
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
