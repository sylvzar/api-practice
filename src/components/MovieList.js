import React, {useState} from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import missingimage from '../img/missingimage.svg'
const MovieList = (movies, searchValue) => {

    const results = movies.movies.movies;
    const [detail, setDetail] = useState(['']);
    const getMovieDetail = async (index) =>
    {
        const url = `http://www.omdbapi.com/?i=${index}&apikey=7eb7254`;
        const data = await fetch(url);
        const dataJson = await data.json();
        setDetail(dataJson); 
    };

    const clearDetail = () => {
        console.log(detail)
        setDetail('')
    }

	return (
    <>
    {
    results.length !== 0 && detail.Title !== undefined ? <Button><button type="submit" onClick={() => clearDetail()}>Close</button></Button> : ""
    }
    
    <Movie detail={detail}/>
    <AllMovies>
        
        {results.map((movie, index) => 
    
        (
            <SingleMovie id={movie.imdbID} key={movie.imdbID} onClick={() => getMovieDetail(movie.imdbID)} >
                <h4  className="title">{movie.Title} ({movie.Year})</h4>
                <h4 className="media">Media: {movie.Type}</h4>{ movie.Poster !== "N/A" ? <img src={movie.Poster} alt={movie.Plot}></img> : <img src={missingimage} style={{opacity: 0.4}} alt={movie.Plot}></img>}    
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

border-radius: 5px;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
margin: 1rem;
cursor: pointer;
padding: 0.3rem;
transition-duration: 0.5s;

&&:hover {
 
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.30);
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

const Button = styled.div`
display: flex;
justify-content: center;

button {
width: 60%;
max-width: 1100px;
border: none;
background-color: rgba(0, 0, 0, 0.1);
padding: 0.6rem;
cursor: pointer;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.10);
transition-duration: 0.5s;
}

button:hover {
    box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.20);
    transition-duration: 0.5s;
}
`

export default MovieList;