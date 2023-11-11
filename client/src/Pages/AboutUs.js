import React from "react";
import "./AboutUs.css"
import image1 from "../Images/img1.png"

export const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="title">About Us</div>
      <div className="aboutus-sec">
        <div className="about-img">
          <img src={image1} />
        </div>
        <div className="about-sec">
          <h2>Who we are</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo. Ab quia accusantium amet quidem nihil, officiis repudiandae eos a illo? Consequuntur saepe consectetur dicta, voluptate iusto illo laborum, voluptatum rerum deserunt assumenda repellendus. Omnis beatae libero debitis nobis, aliquid quia, fuga expedita optio accusantium adipisci fugiat totam ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident iusto soluta porro exercitationem ut adipisci corporis, minima optio expedita beatae incidunt amet, saepe officiis animi qui reprehenderit totam voluptatibus sapiente pariatur voluptate! Accusantium aspernatur beatae, minima ad placeat dolores neque ut, expedita velit quis eos, fugiat cumque laudantium ullam?</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
