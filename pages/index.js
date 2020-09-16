import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { getSortedPostsData } from "../lib/posts";
import OptionWindow from "../components/OptionWindow";
import { motion } from "framer-motion";

export default function Home({ allPostsData }) {
  //Config for transition Animations
  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
    },
  };

  return (
    <Layout>
      <Head>
        <title>what2Do - Hobby Chooser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>What to do</h1>
        <h2>(Besides play video games)</h2>

        <p className={styles.description}>What Games do you like to play?</p>

        <Grid container spacing={7}>
          {/*  <OptionWindow
            title="Shooters"
            subtitle="Doom, Halo, Gears of War, Fortnite, Contra (Not the Reagan
                      Kind)"
            Link="/posts/firstpost"
          /> */}

          <Grid item xs={4}>
            <motion.div //ANIMATION
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              <Card>
                <CardActionArea>
                  <Link href="/articles/[id]" as="/articles/WarGaming">
                    <div>
                      <h3>Strategy Games</h3>
                      <p>
                        Age of Empires, Starcraft, Civilization, Hearthstone,
                        Total War
                      </p>
                    </div>
                  </Link>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <Link href="/articles/[id]" as="/articles/MartialArts">
                  <div>
                    <h3>Fighting Games and MOBAs</h3>
                    <p>Street Fighter, DOTA, Marvel Vs Capcom, Mortal Kombat</p>
                  </div>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <Link href="/articles/[id]" as="/articles/rpg">
                  <div>
                    <h3>Role Playing Games</h3>
                    <p>
                      Final Fantasy, The Witcher, Dark Souls, Fallout, Diablo
                    </p>
                  </div>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <Link href="/articles/[id]" as="/articles/Cosplay">
                  <div>
                    <h3>Simulators</h3>
                    <p>Gran Turismo, War Thunder, The Sims</p>
                  </div>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <Link href="/articles/[id]" as="/articles/Hiking">
                  <div>
                    <h3>Crafting/Open World Games</h3>
                    <p>
                      Minecraft, Grand Theft Auto, Assassin's Creed, Far Cry
                    </p>
                  </div>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <Link href="/posts/post.js">
                  <h3>Or just have a Browse!</h3>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </main>
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
