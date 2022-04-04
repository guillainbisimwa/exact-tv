import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import { productionHouse } from '../../../_mocks_';
import Iconify from '../../../components/Iconify';
import FilmsBanner from './FilmsBanner';

const InfoStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(0),
    color: theme.palette.text.disabled
  }));

const Banner = ({film, index, films }) => {
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
        created,
        pub
      }   = film;
    
    const mainFilm = index === 0;
    const otherFilm = index === 1 || index === 2 || index === 3;

    const [studio, setStudio] = useState(productionHouse.find((obj, index)=> obj.id === productionHouseId));
    return (
    <Grid container>
      <Grid item xs={12} sm={12} md={3} alignSelf="center" >
        <Typography variant='h6' color="#aaa" >Nouveau</Typography>
        <Typography variant='h3' fontWeight="bold" color="#fff" >{title}</Typography>
        <Typography variant='h6' color="#aaa" >{studio.name} Studio</Typography>

        <InfoStyle>
            <Typography  color="#aaa" mr={2}> Rating </Typography>
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

        <Typography  color="#aaa" mt={4} sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            width: "100%"
        }}
        gutterBottom
        variant="body1"> {details} </Typography>

      </Grid>
      <Grid item sm={6} md={7}  alignContent="center" position="relative" mb={5} sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
         height:400
        }}>
          <img src={pub} alt="log" style={{height: 400, position: "absolute", left: 150, zIndex:1 }} />
          <Box style={{ height: 400, width: 400, borderRadius: "50%", backgroundColor: "#fff", position: "absolute",
          top: 0, right: 130 }}></Box>
      </Grid>

      <Grid item xs={12} sm={12} md={2} mb={5} zIndex={1}  sx={{
          display: { xs: 'none', sm: 'none', md: 'block' }
        }}>
        {films.map((film, index) => (
            <FilmsBanner key={film.id} index={0} film={film} />
          ))}
      </Grid>
    </Grid>
  );
};

// ----------------------------------------------------------------------

Banner.propTypes = {
    film: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default  Banner;
