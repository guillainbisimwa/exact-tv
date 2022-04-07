import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NavSection from '../../components/NavSection';
import sidebarConfig from './SidebarConfig';
import Logo from '../../components/Logo';
import Searchbar from './Searchbar';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.01),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

const HomeNavbar = ({ onOpenSidebar }) =>{
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Stack direction="row" alignItems="center" 
          sx={{ xs: 0.5, sm: 1.5, display: { lg: 'contents', xs: 'none'  } }}>
          <Logo />
        </Stack>

        <Stack direction="row" alignItems="center" 
          sx={{ xs: 0.5, sm: 1.5, display: { lg: 'contents', xs: 'none'  } }}>
          <NavSection navConfig={sidebarConfig} />
        </Stack>

       
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          <Searchbar />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

HomeNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default HomeNavbar;
