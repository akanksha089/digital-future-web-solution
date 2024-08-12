import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link rel="stylesheet" href="/assets/css/main.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/carouselTicker.css" />
          <link rel="stylesheet" href="/assets/css/keyframe-animation.css" />
          <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/assets/css/main.css.map" />
          <link rel="stylesheet" href="/assets/css/nice-select.css" />
          <link rel="stylesheet" href="/assets/css/odometer.min.css" />
          <link rel="stylesheet" href="/assets/css/swiper.min.css" />
          <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />


        </body>
      </Html>
    );
  }
}

export default MyDocument;
