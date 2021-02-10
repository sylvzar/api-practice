import React from 'react';
import styled from 'styled-components';
import tvscreen from '../img/tvscreen.svg';

const Nav = () => {
    return (
       
       <Navbar>
           <div className="logo">
               <img src={tvscreen} alt=""/>
               <h4>mediaDB</h4>
            </div>
            <ul>
                <li><a href="https://github.com/sylvzar/api-practice" target="blank">Github Repo</a></li>
                <li><a href="http://www.sylvzar.com" target="blank">Author</a></li>
                <li><a href="mailto:sazarzycki@gmail.com">Contact</a></li>
            </ul>
       </Navbar>
       
    )
}

const Navbar = styled.div`
padding: 1.5rem 1rem;
display: flex;
height: 2rem;
width: 100%;
align-items: center;
justify-content: space-between;

.logo {
    display: flex;
    align-items: center;
    cursor: default;
}

h4 {
    font-weight: 300;
    padding: 0 3px;
}

img {
width: 2rem;
}

ul {
    display: flex;
    padding: 0 1rem;
    font-weight: 300;
}

li {
    padding: 1rem;
    list-style: none;
}

a {
    color: black;
    padding: 0.5rem;
    transition-duration: 0.5s;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.20);
}
a:hover {
    text-decoration: none;
    transition-duration: 0.5s;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
}
`

export default Nav;