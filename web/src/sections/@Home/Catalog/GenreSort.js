import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------


const GenreSort = ({ options, onSort }) => {
  return (
    <TextField sx={{ width: "100%"}} select size="small" value="Genre"  onChange={onSort}>
      <MenuItem disabled value="Genre">
        <Typography sx={{ color: "#868d95"}} >Genre</Typography>
      </MenuItem>
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
