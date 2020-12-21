import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90vh;
    background: #1c1c1c;
    animation: all 0.5s ease;
    h1 {
        font-size: 5rem;
        color: white;
    }
    p {
        font-size: 1.5rem;
        color: gray;
        padding: 2rem 9rem;
    }
    h2 {
        font-size: 4rem;
        color: white;
    }
    h3 {
        font-size: 2.5rem;
        color: white;
    }
    h4 {
        font-size: 1.8rem;
        color: white;
    }
    h5 {
        font-size: 2rem;
        color: #54e346;
    }
}
`;

export default GlobalStyle;
