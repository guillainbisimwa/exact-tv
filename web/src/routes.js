import { Navigate, useRoutes } from 'react-router-dom';
import HomeLayout from './layouts/Home';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Films from './pages/Films';
import Home from './pages/Home';

import NotFound from './pages/Page404';
import Populaires from './pages/Populaires';
import Test from './pages/Test';

const Router = () => {
  return useRoutes([
    {
      path: '/exact',
      element: <HomeLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'films', element: <Films /> },
        { path: 'Populaires', element: <Populaires /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/exact/home" /> },
        { path: 'Test', element: <Test /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

export default Router;
