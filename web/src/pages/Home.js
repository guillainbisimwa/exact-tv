import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
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
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Catalogue
          </Typography>

            <GenreSort options={genre} />
            <CategorySort options={categories} />
            <SearchFilm films={films} />

        </Stack>

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

