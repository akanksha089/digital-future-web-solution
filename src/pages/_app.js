import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import './custom.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Reinitialize scripts after each route change
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        // Reinitialize your plugins or effects here
        if (window.myScrollSmoother) {
          window.myScrollSmoother.init(); // Example: reinitialize your scroll smoother if needed
        }
        // Reinitialize any other plugins or custom scripts here
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
      </Head>

      {/* Load jQuery first */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
