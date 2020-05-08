import styled from 'styled-components';

const HomeStripe2Wrapper = styled.div`
  padding: 20% 5%;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.accent2};
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: center;
  font-size: 1rem;
  line-height: 1;
  font-family: ${(props) => props.theme.fonts.typeface.serif};

  @media screen and (min-width: 400px) {
    font-size: 3.5vw;
  }

  @media screen and (min-width: 500px) {
    font-size: 3vw;
    padding: 14% 5%;
  }

  @media screen and (min-width: 900px) {
    /* font-size: 2rem; */
    font-size: 2vw;
    padding: 14% 5%;
  }

  @media screen and (min-width: 1600px) {
    /* font-size: 2rem; */
    font-size: 2vw;
    padding: 14% 5%;
  }
`;

export const HomeStripe2 = () => (
  <HomeStripe2Wrapper>
    <div>a front-end dev &amp; creative who likes...</div>
  </HomeStripe2Wrapper>
);
