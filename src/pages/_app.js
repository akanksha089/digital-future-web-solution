import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import './custom.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Ensure jQuery is loaded
    if (window.$) {
      console.log("jQuery is loaded");

      // Initialize jQuery plugins here
      // For example, initialize Waypoints
      if (window.Waypoint) {
        // Your Waypoints initialization code here
      }
    } else {
      console.error("jQuery is not loaded");
    }
  }, []);

  return (
    <>
      <Head>
        <title>DIgital Future Web Solutions</title>
        <link rel="shortcut icon" type="image/x-icon" href="\assets\img\favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/keyframe-animation.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/carouselTicker.css" />
          <link rel="stylesheet" href="/assets/css/main.css.map" /> 
      </Head>
      {/* Load jQuery first */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

      {/* Use Script with `strategy="lazyOnload"` to avoid blocking initial render */}
      <Script src="/assets/js/bootstrap-bundle.js" strategy="lazyOnload" />
      <Script src="/assets/js/imagesloaded-pkgd.js" strategy="lazyOnload" />
      <Script src="/assets/js/waypoints.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/venobox.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/meanmenu.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.isotope.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/split-type.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/scroll-trigger.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/scroll-smoother.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.carouselTicker.js" strategy="lazyOnload" />
      <Script src="/assets/js/nice-select.js" strategy="lazyOnload" />
      <Script src="/assets/js/smooth-scroll.js" strategy="lazyOnload" />
      <Script src="/assets/js/ajax-form.js" strategy="lazyOnload" />
      <Script src="/assets/js/contact.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
      <Script src="/assets/js/slider.js" strategy="lazyOnload" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
