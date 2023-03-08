import styled from 'styled-components'

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/post'

import { AboutFace } from '../components/home-hi/about-face'
import { HomeStripe2 } from '../components/home-hi/home-stripe-2'
import { HomeWavesIntro } from '../components/home-hi/home-waves-intro'
import useIntersect from '../components/use-intersect'

const { format } = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 })

// maybe move this all to the about face and only wrap the face so it works better at mobile
const createIntersectRatios = () =>
  Array.from({ length: 100 }).map((item, i) => i / 100)

export const IntersectingBox = styled.div`
  opacity: ${({ ratio }) => (ratio < 0.5 ? ratio * 2 : 1)};
  transition: opacity 0.4s ease-out;
  will-change: transition, opacity;
`

const hiddenH1 = styled.h1``

const IntersectBoxWrapper = props => {
  const [ref, entry] = useIntersect({
    threshold: createIntersectRatios(),
  })

  return (
    <IntersectingBox {...props} ref={ref} ratio={entry.intersectionRatio}>
      {/* intersectionRatio: {format(entry.intersectionRatio)} */}
      <AboutFace ratio={entry.intersectionRatio}></AboutFace>
    </IntersectingBox>
  )
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='h-visually-hidden'>
        Portfolio and test site for Maz Hermon, front-end web developer.
      </h1>
      <IntersectBoxWrapper></IntersectBoxWrapper>
      <HomeStripe2 />
      <HomeWavesIntro />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
