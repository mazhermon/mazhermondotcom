import React from 'react';
import styled from 'styled-components';

import SvgWavesMaz from './svg-waves-maz';

const HomeWavesSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2.5fr 1fr;
  height: calc(100vh - 50px);
  overflow: hidden;
  padding: 4rem 1rem 0 1rem;

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  @media (min-width: 350px) {
    padding-left: 3rem;
  }
  @media (min-width: 670px) {
    padding-top: 5rem;
    grid-template-columns: 3fr 2fr 1fr;
  }

  @media (min-width: 800px) {
    padding-top: 7rem;
    grid-template-columns: 4fr 2fr 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 6fr 2fr 1fr;
    padding-top: 9rem;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 5fr 1fr 1fr;
  }
`;

const HomeIntroCopyNah = styled.div`
  grid-column: 2 / span 1;

  @media (min-width: 1200px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }

  @media (min-width: 1500px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

const MazWavesWrapper = styled.div`
  transform: scale(3, 0.8);
  position: absolute;
  transform-origin: bottom;
  width: 100vw;
  bottom: -90px;
  transform: scale(3, 1.2) rotate(-9deg);

  svg {
    display: block;
  }

  @media (min-width: 600px) {
    bottom: -150px;
    transform: scale(3, 1) rotate(-9deg);
  }
  @media (min-width: 760px) {
    bottom: -175px;
    transform: scale(3, 0.8) rotate(-14deg);
  }
  @media (min-width: 900px) {
    transform: scale(2, 0.6) rotate(-14deg);
  }

  @media (min-width: 1200px) {
    bottom: -180px;
    transform: scale(1.5, 0.5) rotate(-14deg);
  }

  @media (min-width: 1600px) {
    bottom: -230px;
    transform: scale(1.3, 0.5) rotate(-14deg);
  }

  @media (min-width: 2400px) {
    transform: scale(2, 0.4) rotate(-14deg);
  }
`;

export const HomeWavesIntro = () => (
  <HomeWavesSection>
    <HomeIntroCopyNah>
      <p>
        A testing space for the side projects and general web tinkering of Maz
        Hermon, a front-end developer living in Wellington NZ.
      </p>
    </HomeIntroCopyNah>

    <MazWavesWrapper>
      <SvgWavesMaz />
    </MazWavesWrapper>
  </HomeWavesSection>
);
