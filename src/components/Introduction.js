import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { About } from '../styles';
import styled from 'styled-components';

const Introduction = ({ articles }) => {
  const random = Math.floor(Math.random() * articles.length);
  console.log(random);
  const topic = articles[random].tag;
  console.log(topic);

  return (
    <>
      <Intro>
        <Greeting>
          <h1>Hello readers,</h1>
          <h3>
            I get excited about <span>{topic}</span>.
          </h3>
        </Greeting>
        <ContactBox>
          <Email>
            <p>
              <FontAwesomeIcon
                className='icon'
                icon={faArrowCircleRight}
                color='gray'
              />
              I love <span>{topic}</span>. Let's connect!
            </p>
          </Email>
          <Email>
            <p>
              <FontAwesomeIcon
                className='icon'
                icon={faArrowCircleDown}
                color='gray'
              />
              In a rush? Download resume now.
            </p>
          </Email>
        </ContactBox>
      </Intro>
    </>
  );
};

const Greeting = styled(About)`
  display: block;
  margin: 3rem 2rem 0.5rem;
  padding: 2rem 1rem;
  h1 {
    padding: 2rem 1rem;
  }
  h3 {
    padding: 0rem 1rem;
  }
  span {
    background: #54e346;
    padding: 0.5rem;
    color: #1c1c1c;
  }
`;

const Intro = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

const ContactBox = styled(About)`
  display: block;
  padding: 0.25rem 1rem;
  margin-left: 0;
`;

const Email = styled(About)`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem 0.5rem 3.5rem;
  width: 50%;
  cursor: pointer;
  p {
    flex: 1;
  }
  span {
    color: #54e346;
  }
  .icon {
    margin: 0 1rem;
  }
  &:hover {
    p {
      color: white;
    }
    .icon {
      color: white;
    }
    span {
      color: #1c1c1c;
      background: #54e346;
    }
  }
`;

export default Introduction;
