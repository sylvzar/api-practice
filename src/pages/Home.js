import React from 'react'
import styled from 'styled-components';

import MovieList from '../components/MovieList'

const Home = (movies) => {

    return (
        <Main>
        <MovieList movies={movies}/>
        </Main>
    )
}


const Main = styled.div`

`

export default Home
