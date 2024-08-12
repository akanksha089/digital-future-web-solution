import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const FooterSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-settings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.settings);
        console.log('Fetched data11111111111', result.settings); // Log the fetched data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <footer className="footer-section bg-dark-1">
      <div className="shape">
        <img src="assets/img/shapes/footer-shape.png" alt="footer" />
      </div>
      <div className="container">
        <div className="row footer-wrap">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="widget-header">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={data && data.header_logo ? data.header_logo : "not found"} alt="logo" />
                  </a>
                </div>
              </div>
              <p className="mb-20">
                Centric applications productize before front end vortals visualize front end is results and value added
              </p>
              <h4 className="title">
                WE ARE AVAILABLE <span>Mon-Sat: 09.00 am to 6.30 pm</span>
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget footer-col-2">
              <div className="widget-header">
                <h3 className="widget-title">Useful Links</h3>
              </div>
              <ul className="footer-list">
                <li><Link href="about.html">About Us</Link></li>
                <li><Link href="project.html">Our Gallery</Link></li>
                <li><Link href="service.html">Our Services</Link></li>
                <li><Link href="team.html">Our Team</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="widget-header">
                <h3 className="widget-title">Contact Us</h3>
              </div>
              <ul className="address-list">
                <li><a href="mailto:support@agency.com">{data && data.email ? data.email : "email not found"}</a></li>
                <li><a href="tel:+2585492153215">{data && data.phone ? data.phone : "phone not found"}</a></li>
                <li>
                  {data && data.address ? data.address : "address not found"} <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="widget-header">
                <h3 className="widget-title">Subscribe newsletter</h3>
              </div>
              <div className="footer-form mb-20">
                <form action="#" className="rr-subscribe-form">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <input type="hidden" name="action" value="mailchimpsubscribe" />
                  <button className="submit">Sign Up</button>
                  <div className="clearfix"></div>
                </form>
              </div>
              <div className="form-check form-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="man"
                />
                <label className="form-check-label" htmlFor="man">
                  I’m okay with getting emails and having
                  that tracked to improve my experience
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row copyright-content">
            <div className="col-md-6">
              <p>© 2024 DIgital Future Web Solutions. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="social-list">
                <li className="facebook">
                  <Link href={data && data.fb_url ? data.fb_url : "#"}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="pinterest">
                  <Link href={data && data.pinterest_url ? data.pinterest_url : "#"}>
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </li>
                <li className="twitter">
                  <Link href={data && data.twitter_url ? data.twitter_url : "#"}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="instagram">
                  <Link href={data && data.instagram_url ? data.instagram_url : "#"}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
