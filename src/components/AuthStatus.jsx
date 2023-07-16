import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export function AuthStatus() {
  const { username } = useUserStore();
  const { logout } = useUserStore();

  let navigate = useNavigate();

  if (!username) {
    return <p>Usted no se ha identificado.</p>;
  }

  return (
    <p>
      Bienvenido <strong>{username}</strong>!{' '}
      <button
        onClick={() => {
          logout();
          navigate('/adminPage');
        }}
      >
        Sign out
      </button>
    </p>
  );
}
