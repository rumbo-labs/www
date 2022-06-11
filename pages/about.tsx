import type { NextPage } from 'next';
import { AboutText } from '../components/AboutText';
import Layout from '../components/Layout';
import { useRouter } from "next/router";

const About: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout>
      <div className="text-white">{locale}</div>
      <AboutText />
    </Layout>
  );
}

export default About;
