import React, {useState} from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import missingimage from '../img/missingimage.svg'
const MovieList = (movies) => {

    const results = movies.movies.movies;
    const [detail, setDetail] = useState(['']);

    const getMovieDetail = async (index) =>
    {
        const url = `http://www.omdbapi.com/?i=${index}&apikey=7eb7254`;
        const data = await fetch(url);
        const dataJson = await data.json();
        console.log(dataJson.Ratings[0].Value);
        setDetail(dataJson); 
    };

	return (
    <>
    <Movie detail={detail}/>
    <AllMovies>
        
        {results.map((movie, index) => 
    
        (
            <SingleMovie id={movie.imdbID} key={movie.imdbID} onClick={() => getMovieDetail(movie.imdbID)} >
                <h4  className="title">{movie.Title} ({movie.Year})</h4>
                <h4 className="media">Media: {movie.Type}</h4>{ movie.Poster === undefined ? <img src={movie.Poster} alt={movie.Plot}></img> : <img src={movie.Poster} alt={movie.Plot}></img>}
                {/* <img src={movie.Poster} alt={movie.Plot}></img> */}
               
            </SingleMovie>
        ) )}
    </AllMovies>
    
    </>
	); 
};

const AllMovies = styled.div`
max-width: 1400px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: self-position;
`
const SingleMovie = styled.div`
position: relative;
width: 12rem;
margin-top: 1.0rem;
max-height: 20rem;
background-color: rgba(199, 199, 199, 0.7);
border-radius: 5px;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
margin: 1rem;
cursor: pointer;
padding: 0.3rem;
transition-duration: 0.5s;

&&:hover {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 1px 1px 20px rgba(180, 180, 180, 0.5);
    transition-duration: 0.5s;
}

h4 {
    font-size: 0.75rem;
    display: block;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}
.title {
    height: 1.5rem;
    padding: 0 1rem;
    margin-top: 1rem;
}

.media {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0rem 1rem;
    margin-bottom: 2rem;
    max-height: 14rem;
    
}

`

export default MovieList;