import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Info } from './components/Info';
import { Admin } from './components/Admin';
import { AdminPage } from './routes/adminPage';
import Index from './routes/index';
import ErrorPage from './routes/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/infoPage',
        element: <Info />,
      },
      {
        path: '/adminPage',
        element: (
          <AdminPage>
            <Admin />
          </AdminPage>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
