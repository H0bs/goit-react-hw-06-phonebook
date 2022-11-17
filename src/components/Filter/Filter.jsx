import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/contactsSlice';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filteredContacts(e.target.value));
  }
  return (
    <label>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        placeholder="Find contact"
      />
    </label>
  )
}
