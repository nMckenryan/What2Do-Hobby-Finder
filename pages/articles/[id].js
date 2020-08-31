import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import tabletop from "../../public/images/tableTop.png";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>What2Do: {postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <img href="../images/tableTop.png" alt={tabletop}></img>
        <h2 className={utilStyles.headingL}>{postData.subtitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id (uses await for remark)
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
