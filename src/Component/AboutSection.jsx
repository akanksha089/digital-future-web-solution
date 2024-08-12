import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about-section pb-130">
      <div className="round-shape">
        <img
          src="/assets/img/shapes/round-shape.png"
          alt="shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="about-wrap">
        <div className="shape">
          <img
            src="/assets/img/shapes/about-dot-shape.png"
            alt="shape"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="row about-wrapper align-items-center">
          <div className="col-lg-7">
            <div className="about-content fade-wrapper">
              <div className="section-heading mb-0">
                <h4
                  className="sub-heading"
                  data-text-animation="fade-in"
                  data-duration="1.5"
                >
                  About Our Company
                </h4>
                <h2
                  className="section-title overflow-hidden custom-heading"
                  data-text-animation
                  data-split="word"
                  data-duration="1"
                >
                  We provide best web design <br />solution in city
                </h2>
                <p>
                  Digital marketing is the act of promoting and selling products
                  and services by leveraging online marketing tactics such as
                  social media marketing, search marketing, and email marketing.
                  When you get down to it, digital marketing is simply marketing.
                </p>
                <a href="about.html" className="rr-primary-btn">
                  Get Started Now
                  <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <div className="img-shape"></div>
              <div className="about-img reveal">
                <img
                  className="img-1"
                  src="\assets\img\images\about-img.jpg"
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="about-img-2 reveal">
                <img
                  className="img-2"
                  src="/assets/img/images/about-img-1.jpg"
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <img
            className="dark-img"
            src="/assets/img/images/about-text.png"
            alt="about"
            layout="fill"
            objectFit="cover"
          />
          <img
            className="light-img"
            src="/assets/img/images/about-text-light.png"
            alt="about"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

