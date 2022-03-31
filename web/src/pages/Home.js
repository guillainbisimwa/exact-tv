import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, Stack, Typography, Pagination } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { categories, films, genre } from '../_mocks_';
import FilmCard from '../sections/@Home/Catalog/Films';
import GenreSort from '../sections/@Home/Catalog/GenreSort';
import CategorySort from '../sections/@Home/Catalog/CategorySort';
import SearchFilm from '../sections/@Home/Catalog/SearchFilm';

// ----------------------------------------------------------------------

const Home =() =>{
  return (
    <Page title="Exact Tv">
      <Container>
      <Grid container mb={2} spacing={0.5}>
        <Grid item xs={12} md={3} sm={12} >
          <Typography variant="h4" gutterBottom>
            Catalogue
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} sm={4} >
          <GenreSort  options={genre} />
        </Grid>

        <Grid item xs={12} md={3} sm={4} >
          <CategorySort options={categories} />  
        </Grid>

        <Grid item xs={12} md={3} sm={4} >
          <SearchFilm films={films} />
        </Grid>
        </Grid>

        <Grid container spacing={3}>
          {films.map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Home;

