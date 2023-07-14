import { AuthProvider } from "./context/AuthContext";
import { Layout } from "./pages/layout";
import { LoginPage } from "./pages/loginPage";
import { InfoPage } from "./components/infoPage";
import { AdminPage } from "./components/adminPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth } from "./pages/requireAuthPage";
import ErrorPage from "./components/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/infoPage",
        element: <InfoPage />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
      {
        path: "/requireAuthPage",
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
    </AuthProvider>
  );
}
