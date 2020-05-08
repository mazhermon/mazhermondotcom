import React from 'react';
import styled from 'styled-components';

import MazFace from './maz-face';

const AboutFaceWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(100px, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'text text .'
    'face face face';
  height: 96vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 0 1rem;
  /* border-bottom: 40px solid ${(props) => props.theme.colors.accent2}; */

  /* @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  } */

  @media (min-width: 350px) {
    padding-left: 3rem;
  }

  @media (min-width: 800px) {
    padding-left: 6rem;
    padding-top: 7rem;
    /* grid-template-areas:
      'text . .'
      'face face face'; */
    grid-template-columns: 2fr 2fr minmax(400px, 4fr);
    grid-template-rows: 1fr;
    grid-template-areas: 'text face face';
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 2fr minmax(400px, 1fr);
    padding-top: 9rem;
    padding-left: 12rem;
  }

  @media (min-width: 1800px) { 
    padding-left: 18rem;
  }
`;

const AboutFaceTitle = styled.h2`
  font-size: 4rem;
  line-height: 1;
  margin: 0;

  max-width: 400px;

  @media (min-width: 400px) {
    font-size: 5rem;
  }
  @media (min-width: 700px) {
    font-size: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 7rem;
  }
`;

const MazFaceWrapper = styled.div`
  grid-area: face;
  align-self: end;
  transform: translateX(55%);
`;

const AboutContent = styled.div`
  grid-area: text;
  line-height: 1.5;
`;
const AboutText = styled.div``;

export const AboutFace = () => (
  <AboutFaceWrapper>
    <AboutContent>
      <AboutText>
        <p>
          Maz Hermon is a front-end developer &amp; digital creative, people
          &amp; practice leader, conference speaker &amp; pair programming
          enthusiast. Maz has a focus on the front of front-end web development
          but enjoys learning about the full stack for fun &amp; profit.
          JavaScript, CSS and working with people to achieve valuable results
          are his core skill sets.
        </p>
        <p>
          He doesn't picks sides on the CSS vs CSS-in-JS debate or get too
          attached to one framework over another, preferring to enjoy it all.
        </p>
        <p>
          Maz occasionally speaks about himself in the third person but this
          does not extend to in person conversation (as yet) Jokes, this is
          totally Maz’s publicist Shmaz Mermon. (Ain’t nobody got time to write
          their own promos).
        </p>
      </AboutText>
    </AboutContent>
    <AboutFaceTitle>Maz Who?</AboutFaceTitle>

    <MazFaceWrapper>
      <MazFace></MazFace>
    </MazFaceWrapper>
  </AboutFaceWrapper>
);
