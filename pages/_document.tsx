import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=League+Gothic&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700&family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <link rel="icon" type="image/png" href="/images/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        /><script async src="https://www.googletagmanager.com/gtag/js?id=G-PLC0SMCTTS"></script>
      </Head>      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
