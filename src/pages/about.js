import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import FooterSection from "../Component/Footer";
import Link from 'next/link';
import ReactHtmlParser from 'html-react-parser';
import './custom.css';
function About() {
    const [data, setData] = useState(null);
    const [testiData, setTestiData] = useState(null);
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
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        const testiFetchData = async () => {
            try {
                const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-testimonials');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setTestiData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(), testiFetchData();
    }, []);

    const default_meta_title = data && data.default_meta_title || '';
    const default_meta_description = data?.default_meta_description || '';
    const default_meta_keyword = data?.default_meta_keyword || '';   

    return (
        <div className="body">
             <Head>
                    <title>{default_meta_title}</title>
                    <meta name="description" content={default_meta_description} />
                    <meta name="keyword" content={default_meta_keyword} />
                </Head>
            <Header/>
            <div id="popup-search-box">
                <div className="box-inner-wrap d-flex align-items-center">
                    <form id="form" action="#" method="get" role="search">
                        <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
                    </form>
                    <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                </div>
            </div>
            <Sidebar data={data} />
            {/* <div id="preloader">
                <div className="loading" data-loading-text="Runok"></div>
            </div> */}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section className="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
                        <div className="overlay"></div>
                        <div className="shapes">
                            <div className="shape shape-1">
                                <img src="assets/img/shapes/page-header-shape-1.png" alt="shape" />
                            </div>
                            <div className="shape shape-2">
                                <img src="assets/img/shapes/page-header-shape-2.png" alt="shape" />
                            </div>
                            <div className="shape shape-3">
                                <img src="assets/img/shapes/page-header-shape-3.png" alt="shape" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="page-header-content text-center">
                                <h1 className="title">About Our Company</h1>
                             

                                <h4 className="sub-title"><Link className="home" href="/">Home </Link><span></span><Link className="inner-page" href="/about"> About Us</Link></h4>
                            </div>
                        </div>
                    </section>
                    <section className="about-section-2 pt-130 pb-130">
                        <div className="container">
                            <div className="row about-wrap-2 gy-lg-0 gy-4 align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="about-img-box">
                                        <div className="shapes">
                                            <img className="shape shape-1 " src="assets/img/shapes/about-shape-1.png" alt="about" />
                                            <img className="shape shape-2" src="assets/img/shapes/about-shape-2.png" alt="about" />
                                        </div>
                                        <div className="img-1 reveal ">
                                            <img src="assets/img/images/about-img-2.jpg" alt="about" />
                                        </div>
                                        <div className="img-2 reveal">
                                            <img src="assets/img/images/about-img-3.jpg" alt="about" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="about-content-2">
                                        <div className="section-heading">
                                            <h4 className="sub-heading after-none " data-text-animation="fade-in" data-duration="1.5">
                                                About Our Company
                                            </h4>
                                            <h2 className="section-title custom-heading" data-text-animation data-split="word" data-duration="1">
                                                We design and develop outstanding Digital Products and digital-first Brands.
                                            </h2>
                                            <p>
                                                Platea vehicula rutrum curae magna taciti acut malesuada inceptos phasellus massa, eget ultrices tempor lacinia dictumst tincidunt leo mollis luctus varius gravida eleifend cursus litora consequat...
                                            </p>
                                        </div>
                                        <div className="about-items">
                                            <div className="about-item">
                                                <div className="icon">
                                                    <img src="assets/img/icon/about-1.png" alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title custom-heading">Professional Creative <br />Team Members</h4>
                                                </div>
                                            </div>
                                            <div className="about-item">
                                                <div className="icon">
                                                    <img src="assets/img/icon/about-2.png" alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title custom-heading">Provide Market Standard <br />Service to Client’s</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="rr-primary-btn">
                                            Get Started Now <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="process-section-2 fade-wrapper">
                        <div className="container">
                            <div className="section-heading text-center">
                                <span className="bg-text">Studio</span>
                                <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">
                                    Work Process
                                </h4>
                                <h2 className="section-title custom-heading" data-text-animation data-split="word" data-duration="1">
                                    Quality Service For Growth <br />Your Branding Identity
                                </h2>
                            </div>
                            <div className="row gy-lg-0 gy-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="process-box fade-top">
                                        <span className="number">01</span>
                                        <h3 className="title">Client Consultation</h3>
                                        <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                                        <a href="about.html" className="read-more">
                                            Read More <i className="fa-sharp fa-regular fa-chevrons-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="process-box fade-top">
                                        <span className="number">02</span>
                                        <h3 className="title">Research and Analysis</h3>
                                        <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                                        <a href="about.html" className="read-more">
                                            Read More <i className="fa-sharp fa-regular fa-chevrons-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="process-box fade-top">
                                        <span className="number">03</span>
                                        <h3 className="title">Project Revisions Launch</h3>
                                        <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                                        <a href="about.html" className="read-more">
                                            Read More <i className="fa-sharp fa-regular fa-chevrons-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="counter-section counter-2">
                        <div className="container">
                            <div className="row gy-lg-0 gy-4">
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item">
                                        <h3 className="title">
                                            <span className="odometer" data-count="10">0</span>
                                        </h3>
                                        <p>Years of <br />Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item">
                                        <h3 className="title">
                                            <span className="odometer" data-count="18">0</span>
                                        </h3>
                                        <p>Skilled <br />Performance</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item">
                                        <h3 className="title">
                                            <span className="odometer" data-count="32">0</span>
                                        </h3>
                                        <p>Visited <br />Conferences</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item">
                                        <h3 className="title">
                                            <span className="odometer" data-count="1">0</span>k
                                        </h3>
                                        <p>Years of <br />Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="running-text running-3">
                        <div className="bg-img" style={{ backgroundImage: `url('assets/img/bg-img/running-bg.jpg')` }}></div>
                        <div className="carouselTicker carouselTicker-nav" data-speed="fast">
                            <ul className="text-anim carouselTicker__list scroller__inner inner-3">
                                <li>Latest Projects</li>
                                <li className="stroke-text">Web Development</li>
                                <li>Latest Projects</li>
                                <li className="stroke-text">Web Development</li>
                                <li>Latest Projects</li>
                                <li className="stroke-text">Web Development</li>
                                <li>Latest Projects</li>
                                <li className="stroke-text">Web Development</li>
                            </ul>
                        </div>
                    </div>
                    <section className="about-section-5 pt-130 pb-130">
                        <div className="container">
                            <div className="row gy-lg-0 gy-4">
                                <div className="col-lg-6">
                                    <div className="about-content-5">
                                        <div className="section-heading">
                                            <h4
                                                className="sub-heading after-none"
                                                data-text-animation="fade-in"
                                                data-duration="1.5"
                                            >
                                                About Company
                                            </h4>
                                            <h2
                                                className="section-title custom-heading"
                                                data-text-animation
                                                data-split="word"
                                                data-duration="1"
                                            >
                                                Our Main Goal to Satisfy Local & Global Clients
                                            </h2>
                                        </div>
                                        <div className="about-tab">
                                            <nav>
                                                <div
                                                    className="nav nav-tabs"
                                                    id="nav-tab"
                                                    role="tablist"
                                                >
                                                    <button
                                                        className="nav-link active"
                                                        id="nav-home-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#nav-home"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-home"
                                                        aria-selected="true"
                                                    >
                                                        Our Mission
                                                    </button>
                                                    <button
                                                        className="nav-link"
                                                        id="nav-profile-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#nav-profile"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-profile"
                                                        aria-selected="false"
                                                    >
                                                        Our Vision
                                                    </button>
                                                    <button
                                                        className="nav-link"
                                                        id="nav-contact-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#nav-contact"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-contact"
                                                        aria-selected="false"
                                                    >
                                                        Our Goal
                                                    </button>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="nav-home"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-home-tab"
                                                >
                                                    <h3 className="title custom-heading">Digital Web Design Agency</h3>
                                                    <p className="mb-20">
                                                        A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.
                                                    </p>
                                                    <p className="mb-0">
                                                        At the core of a web design agency is essence lies the artistry of visual storytelling and user experience creation.
                                                    </p>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-profile-tab"
                                                >
                                                    <h3 className="title custom-heading">Digital Web Design Agency</h3>
                                                    <p className="mb-20">
                                                        A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.
                                                    </p>
                                                    <p className="mb-0">
                                                        At the core of a web design agency is essence lies the artistry of visual storytelling and user experience creation.
                                                    </p>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-contact"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-contact-tab"
                                                >
                                                    <h3 className="title custom-heading">Digital Web Design Agency</h3>
                                                    <p className="mb-20">
                                                        A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.
                                                    </p>
                                                    <p className="mb-0">
                                                        At the core of a web design agency essence lies the artistry of visual storytelling and user experience creation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-img-wrap-5">
                                        <div className="shapes">
                                            <div className="shape shape-1">
                                                <img src="assets/img/shapes/about-shape-4.png" alt="shape" />
                                            </div>
                                            <div className="shape shape-2">
                                                <img src="assets/img/shapes/about-shape-5.png" alt="shape" />
                                            </div>
                                        </div>
                                        <div className="about-img reveal">
                                            <img className="img-1" src="assets/img/images/about-img-8.png" alt="img" />
                                        </div>
                                        <div className="about-img-2 reveal">
                                            <img className="img-2" src="assets/img/images/about-img-9.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="team-section fade-wrapper">
                        <div className="container">
                            <div className="section-heading text-center">
                                <h4
                                    className="sub-heading"
                                    data-text-animation="fade-in"
                                    data-duration="1.5"
                                >
                                    Team Members
                                </h4>
                                <h2
                                    className="section-title custom-heading"
                                    data-text-animation
                                    data-split="word"
                                    data-duration="1"
                                >
                                    Our Expert Team Would Like <br /> To Hear From You!
                                </h2>
                            </div>
                            <div className="row gy-lg-0 gy-5">
                                <div className="col-lg-3 col-md-6">
                                    <div className="team-item fade-top">
                                        <div className="team-thumb">
                                            <div className="gradient-color"></div>
                                            <img src="assets/img/team/team-1.png" alt="team" />
                                            <ul className="team-social-2">
                                                <li className="facebook">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title custom-heading"><a href="team-details.html">Charlotte Amitina</a></h3>
                                            <span>UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="team-item fade-top">
                                        <div className="team-thumb">
                                            <div className="gradient-color"></div>
                                            <img src="assets/img/team/team-2.png" alt="team" />
                                            <ul className="team-social-2">
                                                <li className="facebook">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title custom-heading"><a href="team-details.html">William Edward</a></h3>
                                            <span>Project Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="team-item fade-top">
                                        <div className="team-thumb">
                                            <div className="gradient-color"></div>
                                            <img src="assets/img/team/team-3.png" alt="team" />
                                            <ul className="team-social-2">
                                                <li className="facebook">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title custom-heading"><a href="team-details.html">Hannah Chloe</a></h3>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="team-item fade-top">
                                        <div className="team-thumb">
                                            <div className="gradient-color"></div>
                                            <img src="assets/img/team/team-4.png" alt="team" />
                                            <ul className="team-social-2">
                                                <li className="facebook">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title custom-heading"><a href="team-details.html">Maiselan Willam</a></h3>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonial-section pt-130 pb-0 fade-wrapper">
                        <div className="container">
                            <div className="section-heading heading-3 text-center">
                                <h4
                                    className="sub-heading"
                                    data-text-animation="fade-in"
                                    data-duration="1.5"
                                >
                                    Testimonials
                                </h4>
                                <h2
                                    className="section-title custom-heading"
                                    data-text-animation
                                    data-split="word"
                                    data-duration="1"
                                >
                                    Clients feedback
                                </h2>
                            </div>
                            <div className="row  gy-lg-0 gy-4 testi-wrap justify-content-center">
                            {testiData && testiData.blogs && testiData.blogs.length > 0 ? (
                            testiData.blogs.map((item, index) => (
                                <div key={index}  className="col-lg-4 col-md-6 single-testimonial">
                                    <div className="testi-item item-3 text-center fade-top">
                                        <div className="testi-thumb">
                                            <img src={item.image} alt="img" />
                                        </div>
                                        <div className="testi-content">
                                            <h3 className="author custom-heading">
                                            {item.title} <span>{item.designation}</span>
                                            </h3>
                                            {item && item.description ? (
                                                <p>{ReactHtmlParser(item.description)}</p>
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
                                {/* <div className="col-lg-4 col-md-6">
                                    <div className="testi-item item-3 text-center fade-top">
                                        <div className="testi-thumb">
                                            <img src="assets/img/testi/testi-author-3.png" alt="img" />
                                        </div>
                                        <div className="testi-content">
                                            <h3 className="author custom-heading">
                                                Victoria Madison <span>Writer</span>
                                            </h3>
                                            <p>
                                                Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="testi-item item-3 mb-0 text-center fade-top">
                                        <div className="testi-thumb">
                                            <img src="assets/img/testi/testi-author-2.png" alt="img" />
                                        </div>
                                        <div className="testi-content">
                                            <h3 className="author custom-heading">
                                                Nicholas Thomas <span>Writer</span>
                                            </h3>
                                            <p>
                                                Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    <FooterSection data={data} />
                </div>
            </div>
            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>

            
        </div>
    )
}

export default About