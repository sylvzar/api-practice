import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&plot=full&apikey=7eb7254`;
    
    const response = await fetch(url);
    const responseJson = await response.json();
   
    if (responseJson.Search){
    setMovies(responseJson.Search);
  }
	};

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  



  return (
    <div className="App">
      <GlobalStyles/>
      <Search>
      <h3>Welcome to our film and TV database.</h3>
      <input type="text" placeholder="Search"  onChange={(event) => setSearchValue(event.target.value)}></input>
      </Search>
      <Home searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} movieDetail={movieDetail} setMovieDetail={setMovieDetail} /> 
    </div>
  );
}

const Search = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem 1rem;
h3{
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
input {
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  height: 2rem;
  padding: 10px;
  width: 60%;
}
`

export default App;
