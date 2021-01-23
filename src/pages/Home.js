import React from 'react'
import styled from 'styled-components';

import MovieList from '../components/MovieList'

const Home = (movies, searchValue, setSearchValue, movieDetail, setMovieDetail) => {

    return (
        <Main>
        <MovieList movies={movies} setMovieDetail={setMovieDetail}/>
        </Main>
    )
}


const Main = styled.div`

`

export default Home
