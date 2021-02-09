import React from 'react';
import styled from 'styled-components';
import tvscreen from '../img/tvscreen.svg';

const Nav = () => {
    return (
       
       <Navbar>
           <img src={tvscreen} alt=""/><h4>mediaDB</h4>
       </Navbar>
       
    )
}

const Navbar = styled.div`
padding: 1.5rem 1rem;
display: flex;
height: 2rem;
width: 100%;
align-items: center;
h4 {
    font-weight: 300;
    padding: 0 3px;
}
img {
width: 2rem;
}
`

export default Nav;