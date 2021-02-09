import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <Grid
      container
      item
      xs={6}
      spacing={1}
      justify="flex-end"
      alignItems="center"
    >
      <img src={avatar} alt="avatar" width="28" />
      <span className={s.span}> {name}</span>
      <IconButton
        edge="end"
        aria-label="logOut"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <ExitToAppIcon />
      </IconButton>
    </Grid>
  );
}
