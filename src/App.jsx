import './App.css'
import Products from './components/products/Products'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Cart from './components/products/Cart.jsx';
import Login from './components/user/Login.jsx';
import SignUp from './components/user/SignUp.jsx';
import { UserRoute } from './components/protectedPoutes/UserRoute.jsx';
import Logout from './components/user/Logout.jsx';
import MyOrders from './components/user/myOrders.jsx';


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
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/orders",
        element: <UserRoute><MyOrders /></UserRoute>
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
