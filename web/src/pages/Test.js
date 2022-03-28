// material
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

const Test = () => {
  return (
    <RootStyle title="Test | Exact Tv">
      <Container>
        <Typography variant="h3" paragraph color="#123456">
            Test
        </Typography>
      </Container>
    </RootStyle>
  );
}

export default Test; 
