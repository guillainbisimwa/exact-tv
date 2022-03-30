import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------


const CategorySort = ({ options, onSort }) => {
  return (
    <TextField select size="small" value="Film" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

CategorySort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default CategorySort;
