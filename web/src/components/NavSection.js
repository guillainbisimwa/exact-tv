import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import {  styled } from '@mui/material/styles';
import { Box, ListItemText, ListItemButton } from '@mui/material';


// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton alignItems='flex-start' disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(3.5),
    // paddingRight: theme.spacing(3.5),
    color: theme.palette.text.disabled,
  })
);

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

function NavItem({ item, active }) {
  const isActiveRoot = active(item.path);
  const { title, path, info } = item;


  const activeRootStyle = {
    color: '#fff',
    fontWeight: 'bold',
  };

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array
};

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other} style={{  display: "inline-flex" }}>
    
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
     
    </Box>
  );
}
