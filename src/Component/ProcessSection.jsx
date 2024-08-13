import React from 'react';
import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="process-section pt-130 fade-wrapper">
      <div className="bg-shape">
        <img
          src="/assets/img/shapes/process-shape.png"
          alt="shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container">
        <div className="section-heading text-center">
          <h4 className="sub-heading custom-heading" data-text-animation="fade-in" data-duration="1.5">
            Work Process
          </h4>
          <h2 className="section-title overflow-hidden custom-heading" data-text-animation data-split="word" data-duration="1">
            Follow 4 Easy Work Steps
          </h2>
        </div>
        <div className="row gy-lg-0 gy-5">
          {[
            {
              title: "Project Processing",
              description: "Cursus euismod dictumst a non dis nisi <br>sociosqu mauris.",
              icon: "/assets/img/icon/process-1.png",
              iconLight: "/assets/img/icon/process-1-light.png"
            },
            {
              title: "High Quality Products",
              description: "Cursus euismod dictumst a non dis nisi <br>sociosqu mauris.",
              icon: "/assets/img/icon/process-2.png",
              iconLight: "/assets/img/icon/process-2-light.png"
            },
            {
              title: "Huge Choice Products",
              description: "Cursus euismod dictumst a non dis nisi <br>sociosqu mauris.",
              icon: "/assets/img/icon/process-3.png",
              iconLight: "/assets/img/icon/process-3-light.png"
            },
            {
              title: "Quality Finished",
              description: "Cursus euismod dictumst a non dis nisi <br>sociosqu mauris.",
              icon: "/assets/img/icon/process-4.png",
              iconLight: "/assets/img/icon/process-4-light.png"
            }
          ].map((process, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="process-item fade-top">
                <div className="process-icon">
                  <div className="icon-border"></div>
                  {/* <Image 
                    className="dark-img" 
                    src={process.icon} 
                    alt="icon" 
                    layout="fill" 
                    objectFit="cover" 
                  /> */}
                  <Image
                    className="light-img"
                    src={process.iconLight}
                    alt="icon"
                    width={55}
                    height={55}
                  // layout="fill" 
                  // objectFit="contain" 
                  />
                </div>
                <div className="process-content">
                  <h3 className="title custom-heading">{process.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: process.description }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="process-text wow fade-in-bottom" data-wow-delay="400ms">
        {/* <Image 
          className="dark-img" 
          src="/assets/img/images/process-img.png" 
          alt="process" 
          layout="fill" 
          objectFit="cover" 
        /> */}
        <Image
          className="process-img-light light-img"
          src="/assets/img/images/process-img-light.png"
          alt="process"
          width={1553}
          height={291}
          objectFit="cover"
          
        />
      </div>
    </section>
  );
};

export default ProcessSection;
