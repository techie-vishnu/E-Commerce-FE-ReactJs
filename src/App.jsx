import './App.css'
import Products from './components/products/Products'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/rootLayout.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Cart from './components/products/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
