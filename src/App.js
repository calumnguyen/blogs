import data from './data';
import Homepage from './pages/Homepage';
import { useState } from 'react';
import GlobalStyle from './components/GlobalStyles';
import Navigation from './components/Navigation';

function App() {
  const [articles, setArticles] = useState(data());

  return (
    <div className='App'>
      <GlobalStyle />
      <Navigation />
      <Homepage articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
