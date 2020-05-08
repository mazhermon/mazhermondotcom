import styled from 'styled-components';

const HomeStripe2Wrapper = styled.div`
  padding: 16px 5% 5%;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: center;
  font-size: 1rem;
  line-height: 1;
  font-family: ${(props) => props.theme.fonts.typeface.serif};

  @media screen and (min-width: 400px) {
    font-size: 3.5vw;
  }

  /* @media screen and (min-width: 500px) {
    font-size: 3vw;
    padding: 14% 5%;
  } */

  /* @media screen and (min-width: 900px) {
    font-size: 2vw;
    padding: 14% 5%;
  }

  @media screen and (min-width: 1600px) {
    font-size: 2vw;
    padding: 14% 5%;
  } */
`;

const Chevron = styled.div`
  width: 30px;
  margin: 0 auto;
  svg {
    display: block;
    fill: ${(props) => props.theme.colors.gray2};
  }
`;

export const HomeStripe2 = () => (
  <HomeStripe2Wrapper>
    <Chevron>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.65 55.32">
        <path d="M49.82,55.32a5.48,5.48,0,0,1-3.89-1.61L1.61,9.39A5.5,5.5,0,0,1,9.39,1.61L49.82,42,90.26,1.61A5.5,5.5,0,0,1,98,9.39L53.71,53.71A5.45,5.45,0,0,1,49.82,55.32Z" />
      </svg>
    </Chevron>
    {/* <div>a front-end dev &amp; creative</div> */}
  </HomeStripe2Wrapper>
);
