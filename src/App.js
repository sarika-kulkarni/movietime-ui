import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./app/routes/root";
import ErrorPage from './app/error';
import Movies from './app/routes/movies';

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
        element: <div> Yet to build theater component</div>
      },
      {
        path: "/register",
        element: <div> Yet to build registration component</div>
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
