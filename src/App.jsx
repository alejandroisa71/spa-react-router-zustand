import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './routes';
import { Info } from './routes/info';
import { Admin } from './routes/admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
        // action: ()=> import('.pages/home')
  },
  {
    path: '/info',
    element:<Info/>
  },
  {
    path: '/admin',
    element:<Admin/>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
