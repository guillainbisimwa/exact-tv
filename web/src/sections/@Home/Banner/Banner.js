import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import { productionHouse } from '../../../_mocks_';
import Iconify from '../../../components/Iconify';

const InfoStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(0),
    color: theme.palette.text.disabled
  }));

const Banner = ({film, index }) => {
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
    
    const mainFilm = index === 0;
    const otherFilm = index === 1 || index === 2 || index === 3;

    const [studio, setStudio] = useState(productionHouse.find((obj, index)=> obj.id === productionHouseId));
    return (
    <Grid item xs={12}>
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

    </Grid>
  );
};

// ----------------------------------------------------------------------

Banner.propTypes = {
    film: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default  Banner;
