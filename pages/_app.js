import "../styles/globals.css";
import "../styles/sidebar.css";
import "../styles/card.css";
import "../styles/contact.css";
import "../styles/skills.css";
import "../styles/snackbar.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-cube";
import "../styles/carousel.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/layout";
config.autoAddCss = false;
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Head>
        <title>Charlie Edwards</title>
        <meta name="description" content="Portfolio for Charlie Edward's web development projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
