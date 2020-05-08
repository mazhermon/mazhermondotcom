import React from 'react';
import styled from 'styled-components';


const LearnAndPlayGrid = styled.div`
  position: relative;
  padding: 4rem;
  height: 95vh;

  padding: 4rem 1rem 0 1rem;

  display: grid;
  grid-template-columns: auto 3fr 20% 20%;
  grid-template-areas: 'text . box .';

  @media (min-width: 350px) {
    padding-left: 3rem;
  }

  @media (min-width: 800px) {
    padding-left: 6rem;
    padding-top: 7rem;
  }

  @media (min-width: 1200px) {
    padding-top: 9rem;
    padding-left: 12rem;
  }

  @media (min-width: 1800px) {
    padding-left: 18rem;
  }

  svg {
    display: block;
  }
`;

const FunBox1 = styled.div`
  grid-area: box;
  width: 100%;
  padding-top: 100%;
  align-self: end;
  background: ${(props) => props.theme.colors.primaryDark};
`;

const LearnAndPlayText = styled.div`
  color: ${(props) => props.theme.colors.primaryDark};

padding: 40%;
  font-family: 'clarendon-urw, serif' !important;

  /* .to,
  .and {
    font-family: ${(props) => props.theme.fonts.typeface.serif};
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
  }

  .to {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transform: translate(-3px, 20px);
  }

  .learn,
  .play {
    font-size: 3rem;
    line-height: 1;
  }

  .learn {
    font-family: ${(props) => props.theme.fonts.typeface.serifbold};
  }

  .andplaywrap {
    display: flex;
  }

  .and {
    font-size: 1.5rem;
    transform: translate(3px, -10px);
  }

  .play {
    font-family: ${(props) => props.theme.fonts.typeface.script};
  } */

  @media screen and (min-width: 600px) {
    .to {
      font-size: 1.1rem;
    }

    .learn,
    .play {
      font-size: 5rem;
    }

    .learn {
      transform: translateX(-4px);
    }

    .and {
      font-size: 2.2rem;
    }

    /* .andplaywrap {
      transform: translateY(-15px);
    } */
  }

  @media screen and (min-width: 900px) {
    .to {
      font-size: 1.5rem;
    }

    .learn,
    .play {
      font-size: 6rem;
    }

    /* .learn {
      transform: translateX(-4px);
    } */

    .and {
      font-size: 2rem;
    }
  }
`;


export default function learnAndPlay() {
  return (
    <>
      <LearnAndPlayGrid>
        to learn and play
        {/* <LearnAndPlayText>
          <div className="to">To</div>
          <div className="learn">Learn</div>
          <div className="andplaywrap">
            <div className="and">&amp;</div>
            <div className="play">Play</div>
          </div>
        </LearnAndPlayText> */}
        <FunBox1 />
        {/* <MazWavesWrapper>
          <SvgWavesMaz />
        </MazWavesWrapper> */}
      </LearnAndPlayGrid>
    </>
  );
}
