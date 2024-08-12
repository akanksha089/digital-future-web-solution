import React from 'react';
import { useEffect, useState } from 'react';

const TestimonialSection = () => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-testimonials');
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
    <section class="testimonial-section overflow-hidden">
            <div class="container">
                <div class="testi-carousel swiper">
                    <div class="swiper-wrapper">
                    {data && data.blogs && data.blogs.length > 0 ? (
                        data.blogs.map((item, index) => (
                        <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src={item.image} alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">{item.title} <span>{item.designation}</span></h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                          ))
                        ) : "faq not found"}
                        {/* <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src="assets/img/testi/testi-author-2.png" alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">Victoria Madison <span>Developer</span></h3>
                                    <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src="assets/img/testi/testi-author-3.png" alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">Nicholas Thomas <span>Designer</span></h3>
                                    <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src="assets/img/testi/testi-author-5.png" alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">James Hallagher <span>Marketer</span></h3>
                                    <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src="assets/img/testi/testi-author-6.png" alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">Amelia Harper <span>Owner</span></h3>
                                    <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-item text-center">
                                <div class="testi-thumb">
                                    <img src="assets/img/testi/testi-author-2.png" alt="img"/>
                                </div>
                                <div class="testi-content">
                                    <h3 class="author">Victoria Madison <span>Writter</span></h3>
                                    <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
  );
};

export default TestimonialSection;
