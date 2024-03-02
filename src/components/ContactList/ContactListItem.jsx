import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button value={name} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;