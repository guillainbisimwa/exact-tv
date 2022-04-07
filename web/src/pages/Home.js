/* eslint-disable no-unused-vars */
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Container, Grid, Stack, Typography, Pagination } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { categories, films, genre } from '../_mocks_';
import FilmCard from '../sections/@Home/Catalog/Films';
import GenreSort from '../sections/@Home/Catalog/GenreSort';
import CategorySort from '../sections/@Home/Catalog/CategorySort';
import SearchFilm from '../sections/@Home/Catalog/SearchFilm';
import { useState } from 'react';
import usePagination from '../hooks/Pagination';
import Banner from '../sections/@Home/Banner/Banner';
import { MotionContainer } from '../components/animate';
import PopularFilms from '../sections/@Home/Popular/PopularFilms';

// ----------------------------------------------------------------------

const Home =() => {

  let [page, setPage] = useState(1);
  const PER_PAGE = 7;

  const count = Math.ceil(films.length / PER_PAGE);
  const _DATA = usePagination(films, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Page title="Exact Tv | Accueil">
      <Container>
      <MotionContainer initial="initial" open>
    

      {films.slice(0,1).map((film, index) => (
          <Banner key={film.id} film={film} index={index} films={films.slice(1,4)}/>
      ))}

      <Grid container mb={5} spacing={0.5}>
        <Grid item xs={12} md={3} sm={12} >
          <Typography variant="h4" color="white" gutterBottom>
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
         
          {_DATA.currentData().map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </Grid>

        <Grid item xs={12} mt={3}>
    
          <Pagination
            color="primary"
            count={count}
            size="large"
            page={page}
            variant="outlined"
            onChange={handleChange}
          />

        </Grid>


        <Grid container mt={10} mb={5} spacing={0.5} justifyContent="space-between">
        <Grid item xs={12} md={3} sm={12} >
          <Typography variant="h4" color="white" gutterBottom>
            Popular Films
          </Typography>
        </Grid>

       
        <Grid item xs={12} md={3} sm={4} >
          <SearchFilm films={films} />
        </Grid>
      </Grid>

        <Grid container spacing={3}>
         
          {films.slice(0,3).map((film, index) => (
            <PopularFilms key={film.id} film={film} index={index} />
          ))}
        </Grid>
        </MotionContainer>
      </Container>
    </Page>
  );
};

export default Home;

