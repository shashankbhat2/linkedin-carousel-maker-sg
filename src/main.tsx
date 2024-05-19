import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CarouselPage from './pages/CarouselPage.tsx';
import CarouselEditorPage from './pages/CarouselEditorPage.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        index: true,
        element: <Home />  
      },
      {
        path:"*",
        element: <NotFound />
      },
      {
        path: "create/carousels",
        element: <CarouselPage />
      },
      {
        path: "create/carousels/editor/:id",
        element: <CarouselEditorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
