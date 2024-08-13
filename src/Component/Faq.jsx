import React from 'react';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';

const FAQSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-faqs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

      <section className="faq-section pt-130 pb-130">
        <div className="faq-shape">
          <img src="assets/img/shapes/faq-shape-1.png" alt="shape" />
        </div>
        <div className="faq-top-shape"></div>
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="faq-content">
                <div className="section-heading">
                  <h4
                    className="sub-heading after-none"
                    data-text-animation="fade-in"
                    data-duration="1.5"
                  >
                    Just Ask us some question
                  </h4>
                  <h2
                    className="section-title custom-heading"
                    data-text-animation
                    data-split="word"
                    data-duration="1"
                  >
                    Digital Solution That Improve Your Agency Growth
                  </h2>
                </div>
                <div className="accordion" id="accordionExampleTwo">
                  {data && data.blogs && data.blogs.length > 0 ? (
                    data.blogs.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header  " id={`heading${index}`} >
                          <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse${index}`}
                          >
                            {item && item.question ? item.question : "Question not found"}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#accordionExampleTwo"
                        >
                          <div className="accordion-body">
                            {item && item.answer ? ReactHtmlParser(item.answer) : "Answer not found"}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    "FAQ not found"
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="faq-img reveal text-center">
                <img src="assets/img/images/faq-img.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="running-text testi">
        <div className="carouselTicker carouselTicker-nav" data-speed="fast">
          <ul className="text-anim carouselTicker__list">
            <li>Customer Testimonial .</li>
            <li>Client Feedbacks</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
