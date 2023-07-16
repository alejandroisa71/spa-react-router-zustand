import { NavLink, Outlet } from 'react-router-dom';
import { AuthStatus } from './AuthStatus';

const active = {
  color: '#fe0',
};

const disactive = {
  default: {
    color: '#da4d6c',
  },
  Hovered: {
    color: '#fafafa',
  },
};

export function Layout() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/infoPage"
            style={({ isActive }) => (isActive ? active : disactive)}
            className="nav-link"
          >
            Página Publica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminPage"
            style={({ isActive }) => (isActive ? active : disactive)}
            className="nav-link"
          >
            Admin
          </NavLink>
        </li>
      </ul>

      <h1>Página de Ejemplo de Autorización</h1>

      <p>
        Este ejemplo demuestra un flujo de inicio de sesión simple con tres
        páginas: una página pública, una página protegida y una página de inicio
        de sesión. Para ver la página protegida, primero debe iniciar sesión.
      </p>

      <AuthStatus />

      <Outlet />
    </div>
  );
}
