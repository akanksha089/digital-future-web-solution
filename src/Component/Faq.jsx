import React from 'react';
import { useEffect, useState } from 'react';
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
                <div className="accordion-item">
                  <h2 className="accordion-header custom-heading" id="headingFour">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      What kind of services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="accordion-body">
                      Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.
                    </div>
                  </div>
                </div>
                     ))
                    ) : "faq not found"}
                {/* <div className="accordion-item">
                  <h2 className="accordion-header custom-heading" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What kind of technology do you use?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="accordion-body">
                      Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header custom-heading" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How much experience do you have?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="accordion-body">
                      Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.
                    </div>
                  </div>
                </div> */}
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
