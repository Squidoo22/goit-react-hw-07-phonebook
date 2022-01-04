import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selector';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <>
      <div>
        <label className={s.filterLabel} htmlFor="filter">
          Find contacts by name
        </label>
      </div>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={onChange}
        className={s.filterInput}
      />
    </>
  );
}
