import React from "react";
import resumeFile from "../documents/BrandonChoi-Resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022 - 2023",
      title: "Software Engineering",
      place: "App Academy, NYC",
      desc: <p>1200+ hours intensive, <strong>in-person</strong> curriculum with a focus on full-stack web development, API design, database management systems, data structures & algorithms, <strong>object-oriented programming</strong>, and paired programming.</p>,
      desc2: <p>&lt;3% acceptance rate, 15-20% attrition rate</p>,
      desc3: 'JavaScript(React/Redux, vanilla JS, Express/Node), Ruby, Ruby on Rails, HTML/CSS, SQL, PostgreSQL, MongoDB, and many more!',
    },
    {
      yearRange: "2016 - 2019",
      title: "Doctor of Physical Therapy (DPT)",
      place: "Emory University, GA",
      desc: <p><em>summa cum laude</em>, GPA 4.0</p>,
      desc2: <span>Successfully published a research paper centered around the development of <strong>data-driven algorithms</strong> to personalize interventions for post-stroke patients based on real-time biofeedback.</span>
    },
    {
      yearRange: "2011 - 2015",
      title: "B.A. in Psychology",
      place: "Boston College, MA",
      desc: <p><em>magna cum laude</em>, GPA 3.8</p>,
      desc2: "Co-President of Psi Chi Psychology Honor Society"
    },
    // {
    //   yearRange: "2011 - 2015",
    //   title: "B.A. in Psychology",
    //   place: "Boston College, MA",
    //   desc: <p><em>magna cum laude</em>, GPA 3.8</p>,
    //   desc2: "Co-President of Psi Chi Psychology Honor Society"
    // },
  ];

  const experienceDetails = [
    {
      yearRange: "Jan - Sep 2022",
      title: "Physical Therapist",
      place: "New York Therapy & Wellness, NY",
      desc: <p>Programmed a <strong>Ruby script</strong> to <strong>automate</strong> the creation of personalized home exercise programs for patients, considering their impairments, functional levels, and goals, reducing average documentation time per treatment note by <strong>13.3%</strong></p>,
      desc2: <p>Spearheaded the establishment of a venture with renowned senior living facility Aterot Avot, assuming the role as the <em>exclusive</em> Physical Therapist and ambassador <strong>overseeing</strong> the plan of care of ~15 residents concurrently</p>,
      desc3: <p>Managed a caseload of 25+ clients across South Brooklyn, ensuring seamless communication among various stakeholders, including family members, insurance providers, and physicians to maximize client and <em>stakeholder satisfaction</em></p>
    },
    // {
    //   yearRange: "2014 - 2016",
    //   title: "Jr. Product Designer",
    //   place: "Dribbble",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   yearRange: "2017 - 2019",
    //   title: "Product Designer",
    //   place: "Adobe",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const skills = [
    {
      name: "HTML",
      percent: 95,
    },
    {
      name: "CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 91,
    },
    {
      name: "Ruby",
      percent: 89,
    },
    {
      name: "React",
      percent: 89,
    },
    {
      name: "Rails",
      percent: 86,
    },
    {
      name: "SQL",
      percent: 74,
    },
    {
      name: "Python",
      percent: "in progress",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-secondary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-secondary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc3}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-secondary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc3}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
          id="coding-languages"
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  {index !== 7 ? <span className="float-end">{skill.percent}%</span> : <span className="float-end">{skill.percent}</span>}
                  {/* <img src="../../public/images/profile.jpg" alt="skill" /> */}
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="technology-rows">
          <div class="icon">
            <i class="devicon-javascript-plain colored"></i>
            <span class="icon-label">JavaScript</span>
          </div>
          <div class="icon">
            <i class="devicon-react-original colored"></i>
            <span class="icon-label">React</span>
          </div>
          <div class="icon">
            <i class="devicon-redux-original colored"></i>
            <span class="icon-label">Redux</span>
          </div>
          <div class="icon">
            <i class="devicon-express-original colored"></i>
            <span class="icon-label">Express</span>
          </div>
          <div class="icon">
            <i class="devicon-nodejs-plain colored"></i>
            <span class="icon-label">Node</span>
          </div>
          <div class="icon">
            <i class="devicon-jquery-plain colored"></i>
            <span class="icon-label">jQuery</span>
          </div>
          <div class="icon">
            <i class="devicon-ruby-plain colored"></i>
            <span class="icon-label">Ruby</span>
          </div>
          <div class="icon">
            <i class="devicon-rails-plain colored"></i>
            <span class="icon-label">Rails</span>
          </div>
          <div class="icon">
            <i class="devicon-html5-plain colored"></i>
            <span class="icon-label">HTML</span>
          </div>
          <div class="icon">
            <i class="devicon-css3-plain colored"></i>
            <span class="icon-label">CSS</span>
          </div>
          <div class="icon">
            <i class="devicon-mongodb-plain colored"></i>
            <span class="icon-label">MongoDB</span>
          </div>
          <div class="icon">
            <i class="devicon-postgresql-plain colored"></i>
            <span class="icon-label">PostgreSQL</span>
          </div>
          <div class="icon">
            <i class="devicon-github-original colored"></i>
            <span class="icon-label">GitHub</span>
          </div>
          <div class="icon">
            <i class="devicon-webpack-plain colored"></i>
            <span class="icon-label">Webpack</span>
          </div>
          <div class="icon">
            <i class="devicon-amazonwebservices-original colored"></i>
            <span class="icon-label">AWS</span>
          </div>
          <div class="icon">

            <i class="devicon-jasmine-plain colored"></i>
            <span class="icon-label">Jasmine</span>
          </div>
          <div class="icon">

            <i class="devicon-jest-plain colored"></i>
            <span class="icon-label">Jest</span>
          </div>
          <div class="icon">

            <i class="devicon-rspec-original colored"></i>
            <span class="icon-label">RSpec</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
