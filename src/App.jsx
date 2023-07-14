
import { AuthProvider } from './context/AuthContext';
import { Layout } from './pages/layout';
import { LoginPage } from './pages/loginPage';
import { InfoPage } from './pages/infoPage';
import { AdminPage } from './pages/adminPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './pages/requireAuthPage';
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/infoPage',
        element: <InfoPage />,
      },

      {
        path: '/loginPage',
        element: <LoginPage />,
      },
      {
        path: '/requireAuthPage',
        element: (
          <RequireAuth>
            <AdminPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </AuthProvider>
  );
}

// eslint-disable-next-line react/prop-types
