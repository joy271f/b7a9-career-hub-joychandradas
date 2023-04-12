import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Homes from './components/Homes/Homes';
import FeaturedDetails from './components/FeaturedDetails/FeaturedDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Homes></Homes>,
        loader: () => fetch('jobCetegory.json')
      },
      {
        path:'jobdetails',
        element: <FeaturedDetails></FeaturedDetails>,
        loader: () => fetch('featuredJob.json')
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:'blog',
        element: <Blog></Blog>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
