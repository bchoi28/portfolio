import React from "react";
import resumeFile from "../documents/BrandonChoi_Resume.pdf";
import resumeQR from "../documents/QR_Resume.png";

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Brandon Choi,</span> a Fullstack Software Engineer.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              As a former Doctor of Physical Therapy, I have always been driven by an obsession with <strong>detail</strong> and a desire to make a positive impact on people's lives.
              My ability to understand complex systems and my passion for creating <strong>durable</strong> solutions has allowed me to seamlessly transition from healing bodies to engineering the <strong>full stack</strong>.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              My greatest strengths at the moment are <strong>JavaScript</strong> and <strong>Ruby</strong>, and I'm excited to dive deeper into both <strong>frontend</strong> <em>AND</em> <strong>backend</strong> technologies!

            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              When I'm not expanding my engineering toolkit, you'll likely find me playing basketball with friends, engaging in contemplative reflections on the mysteries of the cosmos, or enjoying a nice batch of sardines &#x1F41f; (lightly smoked). Let's connect!
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal details start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Brandon Choi
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:bchoi28@gmail.com">bchoi28@gmail.com</a>
                </li>
                <li >
                  <span className="fw-600 me-2">From:</span>Philadelphia, PA
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Based:</span>New York, NY
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill resume-absolute"
              >
                Resume
              </a>
            </div>
            <img className="resume-qr" src={resumeQR} alt="resume" />
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>5</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Coding Languages
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>34</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Coding Projects
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>14</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Professional Work Environments
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experience (of coffee-drinking)
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span style={{ fontSize: '34px' }}>Learning:</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  <a href="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python/2023-05" target="_blank" rel="noreferrer">Python</a>
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span style={{ fontSize: '34px' }}>Reading:</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  <a href="https://eloquentjavascript.net/" target="_blank" rel="noreferrer">Eloquent JavaScript</a>
                </p>
                <br />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span style={{ fontSize: '34px' }}>Listening:</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  <a href="https://www.youtube.com/watch?v=LqRZ2_w56U0" target="_blank" rel="noreferrer">Time (10-hour loop) - Hans Zimmer</a>
                </p>
                <br />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span style={{ fontSize: '34px' }}>Growth</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Mindset                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
