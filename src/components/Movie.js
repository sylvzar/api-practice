import React from 'react'
import styled from 'styled-components';

const Movie = (detail) => {
    const movieDetail = detail.detail;
    return (
     <>
        {movieDetail.Title !== undefined ? 
        <Card>
        <img className="cardposter" src={movieDetail.Poster} alt={movieDetail.Plot}></img>
        <div className="cardcontents">
        <h2>{movieDetail.Title}</h2>
        
        <p><span>Director:</span> {movieDetail.Director}</p>
        <p><span>Cast:</span> {movieDetail.Actors}</p>
        <p><span>Awards:</span> {movieDetail.Awards}</p>
        <p><span>Runtime:</span> {movieDetail.Runtime}</p>
        {movieDetail.Ratings !== undefined ? 
        <p><span>Rating:</span> {movieDetail.Ratings[0].Value}</p> : <p><span>Rating:</span></p>
        }
        <p className="plot"><span>Plot:</span> {movieDetail.Plot}</p>
        </div>
   </Card> : ''
}
       </>
    )
}

const Card = styled.div`
display: flex;
justify-content: center;
max-width: 1400px;
padding-bottom: 2rem;
margin: 0 auto;
transition-duration: 1s;

.cardposter {
    width: 20%;
    min-width: 250px;
    max-width: 400px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    object-fit: cover;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}

.cardcontents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(199, 199, 199, 0.7);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    padding-top: 1rem;
    max-width:60%;
    padding: 1rem;
}

h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
}

h3 {
    font-size: 1rem;
    padding: 0;
    font-weight: normal;  
}

p {
    font-size: 1.1rem;
    line-height: 1.6rem;
}

span {
    font-weight: bold;
}

.plot {
    padding: 0.5rem 0;
}
`

export default Movie
