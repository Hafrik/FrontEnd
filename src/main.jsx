import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResetPassword } from './routes/Password';
import Homepage from './Components/Homepage';
import {LoginForm} from './routes/Login/LoginForm';

const router = createBrowserRouter([
  // Created a router to navigate users
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/password',
    children: [
      {
        path: 'reset',
        element: <ResetPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
