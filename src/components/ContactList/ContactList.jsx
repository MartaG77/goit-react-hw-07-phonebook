import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul>
      {filteredContacts?.map(item => (
        <ContactListItem
          key={item.id}
          name={item.name}
          number={item.phone}
          id={item.id}
        />
      ))}
      {isLoading && !error && <p>Updating...</p>}
    </ul>
  );
};

export default ContactList;