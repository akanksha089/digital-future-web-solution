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
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    slidesPerView: 3,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                });

                // Update Swiper to recognize dynamically added slides
                swiper.update();
            } else {
                console.error('Swiper is not defined. Make sure Swiper JS is correctly loaded.');
            }
        }
    }, [loading, data]);

    if (loading) return <p>Loading testimonials...</p>;
    if (error) return <p>Error loading testimonials: {error.message}</p>;

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
                                            <p>
                                                {item.description ? ReactHtmlParser(item.description) : 'Description not found'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            'No testimonials found'
                        )}
                    </div>
                    <div className="swiper-pagination swiper-pagination-bullet swiper-pagination-bullet-active"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
