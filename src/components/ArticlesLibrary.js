import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const ArticlesLibrary = ({ articles }) => {
  return (
    <StyledArticlesLibrary>
      {articles.map((article) => {
        return (
          <Article>
            <h4>{article.title}</h4>
            <p>{article.content}</p>
            <p className='author'>
              Posted by Calum Nguyen on {article.datePosted}
            </p>
          </Article>
        );
      })}
    </StyledArticlesLibrary>
  );
};

const StyledArticlesLibrary = styled(About)`
  display: block;
  width: 70%;
  margin: 2rem;
  padding: 1rem 2rem;
`;

const Article = styled.div`
  background: transparent;
  border: 3px solid #54e346;
  border-radius: 25px;
  padding: 1.5rem 1rem 0.5rem;
  margin: 2rem 1rem;
`;

export default ArticlesLibrary;
