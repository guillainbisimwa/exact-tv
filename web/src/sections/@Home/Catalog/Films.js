/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Typography, CardContent } from '@mui/material';
// utils

import Iconify from '../../../components/Iconify';
import { fYear } from '../../../Utils/formatTime';
import SvgIconStyle from '../../../components/SvgIconStyle';
// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});


// const AvatarStyle = styled(Avatar)(({ theme }) => ({
//   zIndex: 9,
//   width: 32,
//   height: 32,
//   position: 'absolute',
//   left: theme.spacing(3),
//   bottom: theme.spacing(-2)
// }));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(0),
  color: theme.palette.text.disabled
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});



const FilmCard = ({ film, index }) => {
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

  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }} >
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.69)
              }
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)'
              }
            })
          }}
        >
          {/* <SvgIconStyle
            color="paper"
            src="ss"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              ...((latestPostLarge || latestPost) && { display: 'none' })
            }}
          /> */}
          {/* <AvatarStyle
            alt="name"
            src="xxxx"
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40
              })
            }}
          /> */}

          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 1,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute'
            })
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
            {fYear(dateRelease)}
          </Typography>

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
        </CardContent>
      </Card>
    </Grid>
  );
};

// ----------------------------------------------------------------------

FilmCard.propTypes = {
    film: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default  FilmCard;
