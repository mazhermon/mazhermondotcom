import React from 'react';
import styled from 'styled-components';

import MazFace from './maz-face';

const AboutFaceWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(100px, 1fr);
  grid-template-areas:
    'text text .'
    'face face face';
  min-height: 96vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 4rem 1rem;

  @media (min-width: 350px) {
    padding-left: 3rem;
  }

  @media (min-width: 800px) {
    padding-left: 6rem;
    /* padding-top: 7rem; */
    padding-top: 13vh;
    grid-template-columns: 1fr minmax(400px, 1fr);
    grid-template-areas: 'text .';
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr minmax(400px, 1fr);
    grid-template-areas: '. text .';
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
`;

const MazFaceWrapper = styled.div`
  position: absolute;
  right: -210px;
  bottom: 0;
  width: 400px;

  @media (min-width: 500px) {
    right: -40vw;
    width: 80vw;
  }

  @media (min-width: 800px) {
    right: -360px;
    width: 700px;
  }

  @media (min-width: 1200px) {
    grid-column: 2 / span 2;
    right: -430px;
    width: 800px;
  }
`;

const AboutContent = styled.div`
  grid-area: text;
  max-width: 60ch;

  /* @media (min-width: 800px) {
    margin-top: 4rem;
  }

  @media (min-width: 1800px) {
    margin-top: 9rem;
  } */
`;
const AboutText = styled.div``;

export const AboutFace = (props) => (
  <AboutFaceWrapper>
    <AboutContent>
      <AboutFaceTitle>Consistently Curious</AboutFaceTitle>
      <AboutText>
        <p>
          Maz Hermon, Dad &amp; Husband, front-end developer &amp; digital creative, people &amp;
          practice leader, conference speaker &amp; pair programming enthusiast.
        </p>
        <p>
          Maz loves learning about the web and is consistently curious &amp;
          passionate about the front-end, and working with teams to deliver
          value to <em>people</em>.
        </p>
      </AboutText>
    </AboutContent>

    <MazFaceWrapper>
      <MazFace smile={props.ratio > 0.75}></MazFace>
    </MazFaceWrapper>
  </AboutFaceWrapper>
);
