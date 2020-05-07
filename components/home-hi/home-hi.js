import React from 'react';
import styled from 'styled-components';

import SvgWavesMaz from './svg-waves-maz';
import MazFace from './maz-face';

const MazWavesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(100px, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'text text .'
    'face face face';
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 0 1rem;

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

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
`;

// const HomeIntroCopy = styled.div`
//   grid-area: content;
// `;

const HomeTitle = styled.h2`
  font-size: 4rem;
  line-height: 1;
  margin: 0;
  grid-area: text;

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

const MazWavesWrapper = styled.div`
  transform: scale(3, 1) rotate(-12deg);
  position: absolute;
  bottom: 0;
  width: 100vw;

  @media (min-width: 500px) {
  }
  @media (min-width: 760px) {
    bottom: 35px;
    transform: scale(3, 1.5) rotate(-12deg);
  }
  @media (min-width: 1200px) {
    bottom: 18px;
    transform: scale(2, 1.5) rotate(-14deg);
  }

  @media (min-width: 1900px) {
    bottom: -30px;
    transform: scale(2, 1.3) rotate(-14deg);
  }

  @media (min-width: 2400px) {
    bottom: -120px;
    transform: scale(2, 1.1) rotate(-14deg);
  }
`;

const MazFaceWrapper = styled.div`
  grid-area: face;
  align-self: end;
  transform: translateX(55%);
`;

export const HomeHi = () => (
  <MazWavesSection>
    <HomeTitle>Who's this?</HomeTitle>
    {/* <HomeIntroCopy>
      <p>
        A testing space for the side projects and general web tinkering of Maz
        Hermon, a front-end developer living in Wellington NZ.
      </p>
    </HomeIntroCopy> */}

    <MazFaceWrapper>
      <MazFace></MazFace>
    </MazFaceWrapper>

    {/* move this to the next section */}
    {/* <MazWavesWrapper>
      <SvgWavesMaz />
    </MazWavesWrapper> */}
  </MazWavesSection>
);
