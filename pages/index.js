import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>What to do (Besides play video games)</h1>

        <p className={styles.description}>
          What Games do you like to play?
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card>
            <CardActionArea>
              <CardMedia title="Contemplative Reptile" />
              <Link href="/posts/post.js">
                <div>
                  <h3>Shooters</h3>
                  <p>
                    Doom, Halo, Gears of War, Fortnite, Contra (Not the Reagan
                    Kind)
                  </p>
                </div>
              </Link>
            </CardActionArea>
          </Card>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Strategy Games</h3>
            <p>
              Age of Empires, Starcraft, Civilization, Hearthstone, Total War
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Fighting Games and MOBAs</h3>
            <p>Street Fighter, DOTA, Marvel Vs Capcom, Mortal Kombat</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Role Playing Games</h3>
            <p>Final Fantasy, The Witcher, Dark Souls, Fallout, Diablo</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Simulators</h3>
            <p>Gran Turismo, War Thunder, The Sims</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Crafting/Open World Games</h3>
            <p>Minecraft, Grand Theft Auto, Assassin's Creed, Far Cry</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Or just have a Browse!</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
