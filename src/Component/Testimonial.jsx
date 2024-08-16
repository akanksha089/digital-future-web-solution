import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';

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

    useEffect(() => {
        if (!loading && data && data.blogs && data.blogs.length > 0) {
            // Initialize Swiper after data is loaded and rendered
            if (typeof Swiper !== 'undefined') {
                const swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                    loop: true,
                    autoplay: true,
                    grabcursor: true,
                    speed: 400,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 25,
                        },
                        767: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },
                    },  
                });

                // Update Swiper to recognize dynamically added slides
                swiper.update();
            } else {
                console.error('Swiper is not defined. Make sure Swiper JS is correctly loaded.');
            }
        }
    }, [loading, data]);

    if (loading) return <p></p>;
    if (error) return <p></p>;

    return (
        <section className="testimonial-section overflow-hidden">
            <div className="container">
                <div className="swiper-container testi-carousel">
                    <div className="swiper-wrapper">
                        {data && data.blogs && data.blogs.length > 0 ? (
                            data.blogs.map((item, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="testi-item text-center">
                                        <div className="testi-thumb">
                                            <img src={item.image} alt="img" />
                                        </div>
                                        <div className="testi-content">
                                            <h3 className="author">
                                                {item.title} <span>{item.designation}</span>
                                            </h3>
                                            {item && item.description ? (
                                                <div>{ReactHtmlParser(item.description)}</div>
                                            ) : (
                                                <p></p>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="swiper-pagination"></div> {/* Updated pagination */}
                </div>
            </div>
        </section>

    );
};

export default TestimonialSection;
