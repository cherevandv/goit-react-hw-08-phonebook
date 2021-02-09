import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <Grid item container item xs={6} spacing={1} justify="flex-end">
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
      </Grid>
    </>
  );
}
