import React from 'react';
import styled from 'styled-components';

import SvgWavesMaz from './svg-waves-maz';

const MazWavesSection = styled.section`
  display: grid;
  grid-template-columns: 4fr 245px 1fr;
  grid-template-areas: '. content .';
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 1rem;

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  @media (min-width: 760px) {
    padding-top: 7rem;
  }
`;

const HomeIntroCopy = styled.div`
  grid-area: content;
`;

const MazWavesWrapper = styled.div`
  transform: scale(3, 1.5) rotate(-12deg);
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

export const HomeHi = () => (
  <MazWavesSection>
    <HomeIntroCopy>
      <p>
        A testing space for the side projects and general web tinkering of Maz
        Hermon, a front-end developer living in Wellington NZ.
      </p>
    </HomeIntroCopy>

    <MazWavesWrapper>
      <SvgWavesMaz />
    </MazWavesWrapper>
  </MazWavesSection>
);
