import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "./index.module.css";
import Navigation from "@/components/Navigation/Navigation";
// import Hero from "@/components/Hero/Hero";

import GitHubService from "../services/GitHubService";
import ProjectService from "../services/ProjectService";

const Hero = dynamic(() => import("@/components/Hero/Hero"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Jobs = dynamic(() => import("@/components/Jobs/Jobs"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

const Home = ({ projectDatas }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Idealo OpenSource Community Page</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="app__container">
        <Navigation />
        <Hero />
        <Projects projectDatas={projectDatas} />
        <Jobs />
        <Footer />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const projectDatas = [];
  for (const project of ProjectService.getProjects()) {
    try {
      const projectStatistic = await GitHubService.getStats(
        project.ownerId,
        project.projectId
      );

      projectDatas.push({ github: projectStatistic, config: project });
    } catch (Exception) {
      console.log(Exception);
    }
  }

  return { props: { projectDatas } };
}

export default Home;
