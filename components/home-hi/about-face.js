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
  font-size: 4rem;
  line-height: 1;
  margin: 0 0 1.5rem 0;

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
      <AboutFaceTitle>Maz Who?</AboutFaceTitle>
      <AboutText>
        <p>
          Maz Hermon is a front-end developer &amp; digital creative, people
          &amp; practice leader, conference speaker &amp; pair programming
          enthusiast. Maz has a focus on the front of front-end web development
          but enjoys learning about all things 'web'.
        </p>
        <p>
          JavaScript, CSS and working with people to achieve valuable results
          are his core skill sets. He doesn't pick sides on the CSS vs CSS-in-JS
          debate or get too attached to one CSS or JavaScript framework or
          library over others, preferring to keep an open mind, focus on core
          language fundementals and enjoy all of the amzing technology and tools
          we have access to in 2020.
        </p>
        <p>
          Maz occasionally speaks about himself in the third person but this
          does not extend to in person conversation (as yet). Jokes, this is
          totally Maz’s publicist Shmaz Mermon. (Ain’t nobody got time to write
          their own promos).
        </p>
      </AboutText>
    </AboutContent>

    <MazFaceWrapper>
      <MazFace></MazFace>
    </MazFaceWrapper>
  </AboutFaceWrapper>
);
