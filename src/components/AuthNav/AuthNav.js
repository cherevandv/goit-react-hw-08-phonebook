import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink
        exact
        to="/register"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Register
      </NavLink>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
    </>
  );
}
