import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import s from './Views.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return alert(`Some field is empty.`);
    }
    dispatch(authOperations.login({ email, password }));
    formReset();
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login view</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="">
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email.."
            value={email}
            onChange={handleInputChange}
          ></input>
        </label>
        <label className={s.label} htmlFor="">
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter password.."
            value={password}
            onChange={handleInputChange}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Enter
        </button>
      </form>
    </>
  );
}
