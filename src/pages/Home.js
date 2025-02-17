import React from 'react'
import styled from 'styled-components';

import MovieList from '../components/MovieList'

const Home = (movies, searchValue) => {

    return (
        <Main>
        <MovieList searchValue={searchValue} movies={movies}/>
        </Main>
    )
}


const Main = styled.div`

`

export default Home
