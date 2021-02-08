import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    }
    body{
        height: 100vh;
        width: 100%;
        font-family: 'Lato', sans-serif;
        
    }
    h2{
        font-size: 3rem;
    }
    h3{
        font-size: 1.3rem;
   
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
 
    }
    a{
        text-decoration: none;
  
    }
    img{
        display: block;
    }
    `
    

export default GlobalStyles;