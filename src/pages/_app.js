import React, {useEffect} from 'react';
import Script from 'next/script';
import Head from 'next/head';
import './custom.css';

function MyApp({ Component, pageProps,  }) {
  useEffect(() => {

    if (window.myScrollSmoother) {
        console.log('getScrollFunc:', window.myScrollSmoother.getScrollFunc);
    } else {
        console.error('Scroll smoother object is not available.');
    }
}, []);

  return (
    <>
      <Head>
        <title>DIgital Future Web Solutions</title>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
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
      {/* <Script src="/assets/js/slider.js" strategy="lazyOnload" /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
