import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import FooterSection from "../Component/Footer";
import Link from 'next/link';
import './custom.css';
function Blog() {
    const [data, setData] = useState(0);
    const [settingdata, setSettingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-blogs');
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

        const fetchSettingData = async () => {
            try {
                const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-settings');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setSettingData(result.settings);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(),  fetchSettingData(); 
    }, []);
    const default_meta_title = settingdata && settingdata.default_meta_title || '';
    const default_meta_description = settingdata?.default_meta_description || '';
    const default_meta_keyword = settingdata?.default_meta_keyword || '';    
    return (
        <div className="body">
               <Head>
                    <title>{default_meta_title}</title>
                    <meta name="description" content={default_meta_description} />
                    <meta name="keyword" content={default_meta_keyword} />
                </Head>
            <Header />
            <div id="popup-search-box">
                <div className="box-inner-wrap d-flex align-items-center">
                    <form id="form" action="#" method="get" role="search">
                        <input
                            id="popup-search"
                            type="text"
                            name="s"
                            placeholder="Type keywords here..."
                        />
                    </form>
                    <div className="search-close">
                        <i className="fa-sharp fa-regular fa-xmark"></i>
                    </div>
                </div>
            </div>
            <Sidebar data={settingdata}/>
            {/* <div id="preloader">
            <div className="loading" data-loading-text="Runok"></div>
        </div> */}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section
                        className="page-header"
                        style={{ backgroundImage: 'url(assets/img/bg-img/page-header-bg.jpg)' }}
                    >
                        <div className="overlay"></div>
                        <div className="shapes">
                            <div className="shape shape-1">
                                <img
                                    src="assets/img/shapes/page-header-shape-1.png"
                                    alt="shape"
                                />
                            </div>
                            <div className="shape shape-2">
                                <img
                                    src="assets/img/shapes/page-header-shape-2.png"
                                    alt="shape"
                                />
                            </div>
                            <div className="shape shape-3">
                                <img
                                    src="assets/img/shapes/page-header-shape-3.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                        <div className="container">
                            <div className="page-header-content text-center">
                                <h1 className="title text-white">Blog</h1>
                                <h4 className="sub-title">
                                    <Link className="home" href="/">Home</Link>
                                    <span></span>
                                    <Link className="inner-page" href="/blog">Blog List</Link>
                                </h4>
                            </div>
                        </div>
                    </section>
                    <section className="blog-section pt-130 pb-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="grid-post-wrap-2">
                                        {/* Blog Post 1 */}
                                        {
                                            data && data.blogs && data.blogs.length > 0 ? (
                                                data.blogs.map((item, index) => (
                                                    <div key={index} className="post-card-2 card-3 inner-blog-2">
                                                        <div className="post-thumb">
                                                            <img
                                                                src={item.image}
                                                                alt="blog"
                                                            />
                                                        </div>
                                                        <div className="post-content-wrap">
                                                            <div className="post-content">
                                                                <ul className="post-meta">
                                                                    <li>
                                                                        <i className="fa-sharp fa-regular fa-clock"></i>
                                                                        {item.created_date}
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa-light fa-user"></i>
                                                                        Post by: Admin
                                                                    </li>
                                                                </ul>
                                                                <h3 className="title">
                                                                    <a href={`/blog/${item.slug}`}>
                                                                     {item.title}
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                   {item.desc}
                                                                </p>
                                                                <a href={`/blog/${item.slug}`} className="rr-primary-btn">
                                                                    Read More <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : ""
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection data={settingdata}/>
                </div>
            </div>
            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>

            <div id="theme-toogle" className="switcher-button">
                <div className="switcher-button-inner-left"></div>
                <div className="switcher-button-inner"></div>
            </div>
        </div>
    )
}

export default Blog