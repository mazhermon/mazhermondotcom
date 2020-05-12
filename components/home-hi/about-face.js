import React from 'react';
import styled from 'styled-components';

import MazFace from './maz-face';

const AboutFaceWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(100px, 1fr);
  /* grid-template-rows: 1fr 1fr; */
  grid-template-areas:
    'text text .'
    'face face face';
  min-height: 96vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 0 1rem;

  /* @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  } */

  @media (min-width: 350px) {
    padding-left: 3rem;
  }

  @media (min-width: 800px) {
    padding-left: 6rem;
    padding-top: 7rem;
    grid-template-columns: 1fr minmax(400px, 1fr);
    grid-template-areas: 'text face';
  }

  @media (min-width: 1200px) {
    padding-top: 9rem;
    padding-left: 12rem;
  }

  @media (min-width: 1200px) {
    padding-top: 9rem;
    padding-left: 12rem;
  }

  @media (min-width: 1800px) {
    padding-left: 18rem;
  }
`;

const AboutFaceTitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  margin: 0 0 1.5rem 0;

  max-width: 400px;

  @media (min-width: 800px) {
    font-size: 5rem;
  }
  /* @media (min-width: 700px) {
    font-size: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 7rem;
  } */
`;

const MazFaceWrapper = styled.div`
  grid-area: face;
  align-self: end;
  transform: translateX(19%);
  width: 131vw;

  @media (min-width: 600px) {
    transform: translateX(35%);
    width: 111vw;
  }

  @media (min-width: 800px) {
    transform: translateX(7%);
    width: 83vw;
  }

  @media (min-width: 1200px) {
    transform: translateX(29%);
    width: 57vw;
  }
`;

const AboutContent = styled.div`
  grid-area: text;
  max-width: 60ch;
`;
const AboutText = styled.div``;

export const AboutFace = () => (
  <AboutFaceWrapper>
    <AboutContent>
      <AboutFaceTitle>Consistently Curious</AboutFaceTitle>
      <AboutText>
        <p>
          Maz Hermon, front-end developer &amp; digital creative, people &amp;
          practice leader, conference speaker &amp; pair programming enthusiast.
          Maz loves learning about the web and is consistently curious &amp;
          passionate about the front-end, and working with teams to delivery
          value to <em>people</em>.
        </p>
        {/* <p>– Shmaz Mermon, Maz's publicist.</p> */}
        {/* <p>
          Maz occasionally speaks about himself in the third person but this
          does not extend to in person conversation (as yet). Jokes, this is
          totally Maz’s publicist Shmaz Mermon. (Ain’t nobody got time to write
          their own promos).
        </p> */}
      </AboutText>
    </AboutContent>

    {/* use int obs here */}
    <MazFaceWrapper>
      <MazFace smile={false}></MazFace>
    </MazFaceWrapper>
  </AboutFaceWrapper>
);
