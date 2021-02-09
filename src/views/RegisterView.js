import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    if (!name || !email || !password) {
      return alert(`Some field is empty.`);
    }
    dispatch(authOperations.register({ name, email, password }));
    formReset();
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1>Register view</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name.."
            value={name}
            onChange={handleInputChange}
          ></input>
        </label>
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
          Number
          <input
            type="text"
            name="password"
            placeholder="Enter password.."
            value={password}
            onChange={handleInputChange}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add new user
        </button>
      </form>
    </div>
  );
}
