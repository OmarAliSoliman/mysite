import React, { useState, useEffect } from "react";
import { getdate } from "../api/Getdata";
import ScrollAnimation from "react-animate-on-scroll";

import Project from "../components/Project";
import Footer from "../components/Footer";

function About() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getdate().then((data) => {
      setProjects(data.projects);
      // setProjects(data.data.projects);
    });
  });
  return (
    <div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-me-content">
              <p className="about-me mt-5">
                <span role="img" aria-label="emoji-o">
                  🅾
                </span>{" "}
                I'm Omar Ali, a Front End Developer from Egypt{" "}
                <span role="img" aria-label="emoji-egypt">
                  🇪🇬
                </span>
                . living in Assuit city. I'm in last year at computer science
                faculity{" "}
                <span role="img" aria-label="emoji-gradute">
                  🎓
                </span>
                . I'm using web technec to make an awesome website{" "}
                <span role="img" aria-label="emoji-labtop">
                  💻
                </span>
                .
              </p>
              <p className="about-me mt-2">
                I love Gym{" "}
                <span role="img" aria-label="emoji-gym">
                  💪
                </span>{" "}
                and my favorite animal is panda{" "}
                <span role="img" aria-label="emoji-panda">
                  🐼
                </span>
              </p>
              <div className="skills">
                <h4>Skills</h4>
                <img
                  src="/images/html5.png"
                  style={{ width: "2.5%" }}
                  alt="skill-img"
                />
                <img
                  src="/images/css3.png"
                  style={{ width: "2.5%" }}
                  alt="skill-img"
                />
                <img src="/images/sass.png" alt="skill-img" />
                <img src="/images/javascript.png" alt="skill-img" />
                <img src="/images/jquery.png" alt="skill-img" />
                <img src="/images/bootstrap.png" alt="skill-img" />
                <img src="/images/react.png" alt="skill-img" />
              </div>
              <div className="find-me mt-5">
                <h4 className="text-capitalize">find me online: </h4>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/omar-ali-089aa9186/"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100003115112489"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/Omar_3li_S3ody"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:00201098586783"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h4
            className="mt-5"
            style={{ width: "90%", margin: "0 auto", paddingLeft: "12px" }}
          >
            Some Of My projects
          </h4>
          {projects.map((project, index) => (
            <div className="col-lg-12" key={index}>
              <ScrollAnimation animateIn="flipInX">
                <Project project={project} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
