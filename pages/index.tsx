import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Hero } from '../components/Hero'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Home

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}