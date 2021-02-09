import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Grid } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import SvgIcon from '@material-ui/core/SvgIcon';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={s.nav}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="baseline"
        >
          <Grid item container item xs={6} spacing={1} alignItems="center">
            {isLoggedIn ? (
              <NavLink
                to="/contacts"
                className={s.link}
                activeClassName={s.activeLink}
              >
                <ContactPhoneIcon style={{ fontSize: 30 }} />
              </NavLink>
            ) : (
              <NavLink
                exact
                to="/"
                className={s.link}
                activeClassName={s.activeLink}
              >
                <HomeIcon style={{ fontSize: 30 }} />
              </NavLink>
            )}
          </Grid>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Grid>
      </header>
      <hr></hr>
    </>
  );
}
