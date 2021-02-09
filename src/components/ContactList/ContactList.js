import { useSelector, useDispatch } from 'react-redux';
import { operations } from '../../redux';
import { getVisiblesContacts, getLoading } from '../../redux/selectors';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Loader from 'react-loader-spinner';
import './ContactList.module.css';

// export default function ContactList() {
//   const contactsBook = useSelector(getVisiblesContacts);
//   const loadingContactsBook = useSelector(getLoading);

//   const dispatch = useDispatch();

//   return (
//     <>
//       <ul>
//         {contactsBook.map(({ id, name, number }) => (
//           <li key={id}>
//             <p>
//               {name}: {number}
//             </p>
//             <button
//               type="button"
//               onClick={() => dispatch(operations.deleteContact(id))}

//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       {loadingContactsBook && (
//         <Loader type="TailSpin" color="#6ebfd8" height={30} width={30} />
//       )}
//     </>
//   );
// }

export default function ContactList() {
  const contactsBook = useSelector(getVisiblesContacts);
  const loadingContactsBook = useSelector(getLoading);

  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contactsBook.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ListItemText primary={`${name}: ${number}`} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(operations.deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </ul>
      {loadingContactsBook && (
        <Loader type="TailSpin" color="#6ebfd8" height={30} width={30} />
      )}
    </>
  );
}
