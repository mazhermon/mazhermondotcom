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

// const HomeIntroCopy = styled.div`
//   grid-area: content;
// `;

const AboutFaceTitle = styled.h2`
  font-size: 4rem;
  line-height: 1;
  margin: 0;
  grid-area: text;
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

export const AboutFace = () => (
  <AboutFaceWrapper>
    <AboutFaceTitle>Who's</AboutFaceTitle>
    <MazFaceWrapper>
      <MazFace></MazFace>
    </MazFaceWrapper>
  </AboutFaceWrapper>
);
