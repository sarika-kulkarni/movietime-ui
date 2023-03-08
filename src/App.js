import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./app/routes/root";
import ErrorPage from './app/error';
import Movies from './app/routes/movies';
import Registration from './app/routes/registration';
import Theaters from './app/routes/theaters';

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
