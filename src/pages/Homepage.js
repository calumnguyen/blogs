import React from 'react';
import ArticlesLibrary from '../components/ArticlesLibrary';
import Introduction from '../components/Introduction';

const Homepage = ({ articles, setArticles }) => {
  return (
    <>
      <Introduction articles={articles} />
      <ArticlesLibrary articles={articles} />
    </>
  );
};

export default Homepage;
