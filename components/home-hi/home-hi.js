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
  bottom: -60px;
  width: 100vw;

  @media (min-width: 500px) {
    bottom: -170px;
  }
  @media (min-width: 760px) {
    bottom: -230px;
    transform: scale(1.3, 1) rotate(-12deg);
  }
  @media (min-width: 1200px) {
    bottom: -280px;
  }
  @media (min-width: 1200px) {
    bottom: -380px;
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
