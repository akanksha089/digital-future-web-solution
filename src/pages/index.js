import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from "../Component/Header";
import Sidebar from '../Component/Sidebar';
import HeroSection from "../Component/HeroSection";
import ProcessSection from "../Component/ProcessSection";
import Service from "../Component/Service";
import AboutSection from "../Component/AboutSection";
import FAQSection from "../Component/Faq";
import TestimonialSection from "../Component/Testimonial";
import ProjectSection from "../Component/Project";
import BlogSection from "../Component/Blog";
import FooterSection from "../Component/Footer";
export default function Home() {
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
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const default_meta_title = data && data.default_meta_title || '';
    const default_meta_description = data?.default_meta_description || '';
    const default_meta_keyword = data?.default_meta_keyword || '';    
    return (
        <>
            <div className="body">
                <Head>
                    <title>{default_meta_title}</title>
                    <meta name="description" content={default_meta_description} />
                    <meta name="keyword" content={default_meta_keyword} />
                </Head>
                <Header />
                <Sidebar data={data} />
                {/* <div id="preloader">
            <div className="loading" data-loading-text="Runok"></div>
        </div> */}
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <HeroSection />
                        <ProcessSection />
                        <AboutSection />
                        <Service />
                        <FAQSection />
                        <TestimonialSection />
                        <ProjectSection />
                        <BlogSection />
                        <FooterSection data={data} />
                    </div>
                </div>
                <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
            </div>


        </>


    );
}

