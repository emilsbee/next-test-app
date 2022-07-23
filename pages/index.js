import { useRouter } from 'next/router'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { fetchListings } from '../queries/listings'

export default function Index({ locale, listings }) {
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          Locale: {locale}

          {listings.map((listing) => (
            <p key={listing.title}>{listing.title}</p>
          ))}

          <p>Some change</p>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale, locales }) {
  const listings = await fetchListings(locale);

  return {
    props: {
      locale,
      locales,
      listings,
    },
  }
}

// export const getServerSideProps = ({ locale, locales }) => {
//   return {
//     props: {
//       locale,
//       locales,
//     },
//   }
// }
