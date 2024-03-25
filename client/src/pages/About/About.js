import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePhoto from "../../assets/profile_photo.jpg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={profilePhoto}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hey there! I'm Aakash Kumar Prasad,
                 a dedicated MERN STACK developer with a passion for crafting innovative solutions using the MERN stack. 
                 Currently studying in DTU with a specialization in software engineering, I'm on the lookout for internship/Full Time opportunities 
                 where I can apply my skills and creativity to solve real-world problems. In addition to my technical skills, 
                 I'm a strong communicator and a team player. I thrive in collaborative environments where ideas are freely exchanged, 
                 and I'm always eager to learn from others while sharing my own knowledge and experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
