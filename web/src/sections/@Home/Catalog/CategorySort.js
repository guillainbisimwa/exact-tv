import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------


const CategorySort = ({ options, onSort }) => {
  return (
    <TextField sx={{ width: "100%"}} select size="small" value="Categorie" onChange={onSort}>
      <MenuItem disabled value="Categorie">
        <Typography sx={{ color: "#868d95"}} >Categorie</Typography>
      </MenuItem>
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
