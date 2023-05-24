import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from 'redux/filter/filterSelectors';
import { setContactFilter } from 'redux/filter/filterSlice';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};