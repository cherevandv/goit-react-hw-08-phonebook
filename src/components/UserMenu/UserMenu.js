import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
// import { operations } from '../redux';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <>
      <img src={avatar} alt="avatar" width="32" />
      <span>Hi, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </>
  );
}
