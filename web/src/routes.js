import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/HomeLayout';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';


import NotFound from './pages/Page404';
import Home from './pages/Home';


export default function Router() {
  return useRoutes([
   
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: 'home', element: <Home /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
