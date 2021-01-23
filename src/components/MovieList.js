import React from 'react';
import styled from 'styled-components';
const MovieList = (movies, setMovieDetail, ) => {
    const results = movies.movies.movies;

    function movieSelectHandler() {
        return (
            console.log("Runs on click.")
        )
    }

	return (
    <AllMovies>
		{results.map((movie, index) => (
            <SingleMovie onClick={movieSelectHandler} id={movie.imdbID} key={movie.imdbID}>
                <h4>{movie.Title}</h4>
                <img src={movie.Poster} alt="poster"></img>
            </SingleMovie>
        ) )}
    </AllMovies>
	); 
};
const AllMovies = styled.div`
max-width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: self-position;

h4 {
    font-size: 0.75rem;
    height: 2.5rem;
    padding: 0 1rem;
    margin-top: 1rem;
    display: block;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}
`
const SingleMovie = styled.div`
width: 12rem;
margin-top: 1.0rem;
max-height: 20rem;
background-color: rgba(199, 199, 199, 0.7);
border-radius: 5px;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
margin: 1rem;
cursor: pointer;

img {
    width: 100%;
    object-fit: cover;
    padding: 0rem 1rem;
    margin-bottom: 2rem;
    max-height: 14rem;
}
`

export default MovieList;