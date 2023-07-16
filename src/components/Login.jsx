import { useLocation, Form, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export function Login() {
  const { login } = useUserStore();
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(event) {
    event.preventDefault();
    login();

    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className='mesagge-unlogged'>Debe iniciar sesión para ver la página </p>

      <Form className="form-login" onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" placeholder='admin' />
        </label>{' '}
        <label>
          Password: <input name="password" type="password"  placeholder='admin'/>
        </label>{' '}
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
