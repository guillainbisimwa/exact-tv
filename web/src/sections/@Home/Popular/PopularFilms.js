/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Typography, CardContent, Avatar, Button } from '@mui/material';
// utils

import Iconify from '../../../components/Iconify';
import { fYear } from '../../../Utils/formatTime';

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.disabled
}));

const CoverImgStyle = styled('img')({
  //top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  //position: 'absolute',
  borderRadius: 16
});



const PopularFilms = ({ film }) => {
  const {
    id,
    title,
    subtitle,
    dateAnouncement,
    dateRelease,
    categoryId,
    actorId,
    actorsId, 
    genreId,
    userId,
    productionHouseId,
    productionHousesId,
    urlTrailer,
    urlFullFilm,
    price,
    discount,
    cover,
    screenShots,
    details,
    status,
    stars,
    competitions,
    created}   = film;

  const latestPostLarge = 1;
  const latestPost = 1;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid conatiner display="flex" sx={{ backgroundColor: "#834f39",}}  borderRadius={2}>
        <Grid item xs={6}>
            <CoverImgStyle alt={title} src={cover} />
        </Grid>
        <Grid item xs={6} p={2}>
       
         

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white'
              })
            }}
          >
            {title}
          </TitleStyle>
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: '#eee', display: 'block' }}
          >
            {fYear(dateRelease)} - COMEDIE
          </Typography>

          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
           COMEDIE
          </Typography>

          <InfoStyle>
            {[...Array(5-stars)].map((index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Iconify icon='eva:star-fill' sx={{ width: 16, height: 16, mr: 0.3, color: "#f5dd0b" }} />
              </Box>
            ))}

            {[...Array(5 -(5-stars))].map((index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Iconify icon='eva:star-fill' sx={{ width: 16, height: 16, mr: 0.3, }} />
              </Box>
            ))}
          </InfoStyle>

          <Button variant="contained"  fullWidth>
              Voir
            </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

// ----------------------------------------------------------------------

PopularFilms.propTypes = {
    film: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default  PopularFilms;
