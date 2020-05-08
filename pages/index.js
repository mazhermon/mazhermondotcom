import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/post';

import { AboutFace } from '../components/home-hi/about-face';
import { HomeStripe2 } from '../components/home-hi/home-stripe-2';
import LearnAndPlay from '../components/home-hi/learn-and-play';
import { HomeWavesIntro } from '../components/home-hi/home-waves-intro';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeWavesIntro />
      <HomeStripe2 />
      <AboutFace />

      {/* <LearnAndPlay /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
