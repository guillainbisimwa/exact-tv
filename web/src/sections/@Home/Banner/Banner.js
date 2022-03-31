import { Grid, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { productionHouse } from '../../../_mocks_';


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

    </Grid>
  );
};

// ----------------------------------------------------------------------

Banner.propTypes = {
    film: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default  Banner;
