import Head from "next/head";
import { getTranslations as t } from "../locales";
import "../public/assets/styles/style.css";
import { checkTheme } from "../src/config/Theme";

//check wether the dark theme
checkTheme();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {"SecureDocs"}
          {" - "}
          {t("sub_title")}
        </title>
        <link rel="icon" href="/Keys.png" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Encrypt and Decrypt files securely in your browser."
        />
        <meta
          name="theme-color"
          content="#fafafa"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1c1c1c"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
