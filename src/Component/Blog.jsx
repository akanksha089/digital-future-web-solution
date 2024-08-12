import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log('Fetched data:', result); // Log the fetched data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (

    <>
      <section className="blog-section pt-130 pb-130 fade-wrapper">
        <div className="container">
          <div className="section-heading text-center">
            <h4 className="sub-heading custom-heading" data-text-animation="fade-in" data-duration="1.5">
              NEWS & LATEST UPDATES
            </h4>
            <h2 className="section-title custom-heading" data-text-animation data-split="word" data-duration="1">
              Check Our Company Inside Story
            </h2>
          </div>
          <div className="post-wrap">
            {
              data && data.blogs && data.blogs.length > 0 ? (
                data.blogs.map((item, index) => (
                  <div key={index} className="post-card-wrap fade-top">
                    <div className="post-card">
                      <div className="post-thumb">
                        <img src={item.image} alt="post" />
                      </div>
                      <div className="post-content-wrap">
                        <div className="post-content">
                          <ul className="post-meta">
                            <li><i className="fa-sharp fa-regular fa-clock"></i> {item.created_date}</li>
                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                          </ul>
                          <h3 className="title custom-heading">
                            <Link href={`/blog/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <Link href={`/blog/${item.slug}`} className="rr-primary-btn blog-btn">
                            Read More <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : "blogs not found"
            }
          </div>
        </div>
      </section>

      <section className="sponsor-section pb-130">
        <div className="container">
          <div className="sponsor-wrap">
            <div className="sponsor-item item-1">
              <h3 className="title custom-heading">
                WORKED WITH <br /> GLOBAL LARGEST <br /> BRANDS
              </h3>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-1.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-2.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-3.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-4.png" alt="sponsor" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default BlogSection;
