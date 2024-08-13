import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-shape">
        <img
          src="/assets/img/bg-img/hero-bg-shape.png"
          alt="shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-shape">
        <img
          src="/assets/img/shapes/hero-shape-1.png"
          alt="shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-images">
        <img
          src="/assets/img/images/hero-img-1.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
        <img
          src="/assets/img/images/hero-img-2.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
        <img
          src="/assets/img/images/hero-img-3.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-img">
        <img
          src="/assets/img/images/hero-img.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container">
        <div className="hero-content">
          <h4 className="sub-title anim-text custom-heading">Transforming</h4>
          <h2 className="title anim-text ">Visions into</h2>
          <h3 className="bottom-title anim-text custom-heading ">Digital Reality</h3>
          <Link href="/about" className="hero-btn">
            <i className="fa-thin fa-arrow-right"></i>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
