import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------


const GenreSort = ({ options, onSort }) => {
  return (
    <TextField sx={{ width: "100%"}} select size="small" value="Action" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

GenreSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default GenreSort;
