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
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-shape">
        <img
          src="/assets/img/shapes/hero-shape-1.png"
          alt="shape"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-images">
        <img
          src="/assets/img/images/hero-img-1.png"
          alt="hero"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
        <img
          src="/assets/img/images/hero-img-2.png"
          alt="hero"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
        <img
          src="/assets/img/images/hero-img-3.png"
          alt="hero"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-img">
        <img
          src="/assets/img/images/hero-img.png"
          alt="hero"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="container">
        <div className="hero-content">
          {/* <h4 className="sub-title anim-text custom-heading">Transforming</h4> */}
          <h4 className="sub-title anim-text custom-heading ">
            <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>T</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>r</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>a</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>n</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>s</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>f</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>o</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>r</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>m</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>n</div>
              <div className="char" style={{ display: 'inline-block', transform: 'translate(0px, 0%)' }}>g</div>
            </div>
          </h4>

          <h2 className="title anim-text ">
            <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>V</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>s</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>o</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>n</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)', marginRight: '6px' }}>s</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>n</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>t</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>o</div>
            </div>
          </h2>

          <h3 className="bottom-title anim-text custom-heading ">
            <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>D</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>g</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>t</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>a</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)', marginRight:'6px' }}>l</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>R</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>e</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>a</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>l</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>i</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>t</div>
              <div className="char" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0%)' }}>y</div>
            </div>
          </h3>

          <Link href="/about" className="hero-btn">
            <i className="fa-thin fa-arrow-right"></i>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
