import React, { useRef, useEffect } from "react";
import resumeFile from "../documents/BrandonChoi_Resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                ref2.current.classList.add('visibleX');
                ref3.current.classList.add('visibleY');
            } else {
                ref2.current.classList.remove('visibleX');
                ref3.current.classList.remove('visibleY');
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.5
        });

        observer.observe(ref1.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const scrollToCodingLanguages = () => {
            const mySkillsElement = document.getElementById("my-skills");
            if (mySkillsElement) {
                mySkillsElement.scrollIntoView({ behavior: "smooth" });
            }
        };

        const codingLanguagesElement = document.getElementById("coding-languages"); // Replace with the actual ID of your button/link
        if (codingLanguagesElement) {
            codingLanguagesElement.addEventListener("click", scrollToCodingLanguages);
        }
    }, [])

    const educationDetails = [
        {
            yearRange: "2022 - 2023",
            title: "Software Engineering",
            place: "App Academy, NYC",
            // desc: <p>1200+ hours intensive, <strong>in-person</strong> curriculum with a focus on full-stack web development, API design, database management systems, data structures & algorithms, <strong>object-oriented programming</strong>, and paired programming.</p>,
            // desc2: <p>&lt;3% acceptance rate, 15-20% attrition rate</p>,
            // desc3: 'JavaScript(React/Redux, vanilla JS, Express/Node), Ruby, Ruby on Rails, HTML/CSS, SQL, PostgreSQL, MongoDB, and many more!',
        },
        {
            yearRange: "2016 - 2019",
            title: "Doctor of Physical Therapy (DPT)",
            place: "Emory University, GA - GPA: 4.0",
            // desc: <p><em>summa cum laude</em>, GPA 4.0</p>,
            // desc2: <p>Successfully published a research paper centered around the development of <strong>data-driven algorithms</strong> to personalize interventions for post-stroke patients based on real-time biofeedback.</p>,
            // desc3: <p>Allied Health Representative - Institute for Healthcare Improvement (IHI)</p>
        },
        {
            yearRange: "2011 - 2015",
            title: "B.A. in Psychology",
            place: "Boston College, MA - GPA: 3.8",
            // desc: <p><em>magna cum laude</em>, GPA 3.8</p>,
            // desc2: "Co-President of Psi Chi Psychology Honor Society"
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
            yearRange: "Nov 2023 - Present",
            title: "Full-stack Engineer, Contract",
            place: <a rel='noreferrer' href="https://otpotential.com/" target="_blank">OT Potential</a>,
            // desc: <p>Design and implement a dynamic banner on Club OT Potential, the primary UI for members, with call-to-actions tailored to subscription tier (anonymous, free trial, paid) to enhance user engagement and conversion rates</p>
        },
        {
            yearRange: "Oct 2023 - Present",
            title: "Front-end Engineer, Freelance",
            place: <a href="https://www.watershedtulsa.com/" target="_blank" rel='noreferrer'>Watershed Hospitality</a>,
            // desc: <p><strong>Direct</strong> the <strong>front-end development</strong> through an Agile/Jira workflow for a cross-platform, open-source desktop application
            // </p>,
            // desc2: <p>Oversee the design, implementation, and optimization of an internal payroll software tool, working closely with a UX designer and the back-end team to ensure a user-centric and high-performance solution.</p>,
            // desc3: <p>Collaborate closely with various stakeholders, including department heads and IT teams, to gather requirements, identify user experience pain points, and implement responsive design enhancements</p>,
            // desc4: <p>Achieve an estimated <strong>2-hr/day reduction</strong> in workload by automating employee payouts, streamlining payment breakdowns, and enhancing sales tracking, preventing costly accounting errors previously caused by manual Google Sheets input</p>,
        },
        {
            yearRange: "Oct 2023 - Present",
            title: "Computer Science AI Trainer",
            place: <a href="https://scale.com/" target="_blank" rel="noreferrer">Scale AI</a>,
            // desc: <p>Critique and correct a series of <strong>computer science</strong> and programming-related responses produced by GPT-3.5 in terms of explanation quality, style and formatting, code functionality and performance, relevance, and security to fine-tune the AI model.</p>,
            // desc2: <p>Scale AI is OpenAI's preferred partner in fine-tuning GPT-3.5.</p>,
        },
        {
            yearRange: "Jan - Sep 2022",
            title: "Physical Therapist",
            place: <a target="_blank" rel="noreferrer" href="http://www.nytherapyandwellness.com/">New York Therapy & Wellness, NY</a>,
            // desc: <p>Programmed a <strong>Ruby script</strong> to <strong>automate</strong> the creation of personalized home exercise programs for patients, considering their impairments, functional levels, and goals, reducing average documentation time per treatment note by <strong>~13.3%.</strong></p>,
            // desc2: <p>Spearheaded the establishment of a venture with renowned senior living facility Aterot Avot, assuming the role as the <em>exclusive</em> Physical Therapist and ambassador <strong>overseeing</strong> the plan of care of ~15 residents concurrently.</p>,
            // desc3: <p>Managed a caseload of 25+ clients across South Brooklyn, ensuring seamless communication among various stakeholders, including family members, insurance providers, and physicians to maximize client and <em>stakeholder satisfaction.</em></p>
        },
    ];

    // const skills = [
    //     {
    //         name: "HTML",
    //         percent: 95,
    //     },
    //     {
    //         name: "CSS",
    //         percent: 95,
    //     },
    //     {
    //         name: "JavaScript",
    //         percent: 91,
    //     },
    //     {
    //         name: "Ruby",
    //         percent: 89,
    //     },
    //     {
    //         name: "React",
    //         percent: 89,
    //     },
    //     {
    //         name: "Rails",
    //         percent: 86,
    //     },
    //     {
    //         name: "SQL",
    //         percent: 74,
    //     },
    //     {
    //         name: "Python",
    //         percent: "in progress",
    //     },
    // ];

    return (
        <section
            id="resume"
            className={"section " + (darkTheme ? "bg-dark-1" : "")}
        >
            <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
                {/* Heading */}
                <div
                    ref={ref1}
                    className="position-relative d-flex text-center mb-5">
                    <h2
                        ref={ref2}
                        className={
                            "heading1 text-24  text-uppercase fw-600 w-100 mb-0 " +
                            (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                        }
                    >
                        Summary
                    </h2>
                    <p
                        ref={ref3}
                        className={
                            "paragraph1 text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                            (darkTheme ? "text-white" : "text-dark")
                        }
                    >
                        {" "}
                        Resume
                        <span className="heading-separator-line border-bottom border-3 border-secondary d-block mx-auto" />
                    </p>
                </div>
                <div className="text-center" style={{ marginTop: '-40px', marginBottom: '50px' }}>
                    <a
                        className="btn btn-outline-secondary rounded-pill shadow-none"
                        href={resumeFile}
                        // href='https://scanqr.to/d993ee69'
                        download
                    // target="_blank"
                    >
                        Resume
                        <span className="ms-1">
                            <i className="fas fa-download" />
                        </span>
                    </a>
                </div>
                <br />
                <br />
                {/* Heading end*/}
                <div className="row gx-5">
                    {/* My Experience */}
                    <div className="col-md-6">
                        <h2
                            className={
                                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
                            }
                        >
                            Experience
                        </h2>
                        {experienceDetails.length > 0 &&
                            experienceDetails.map((value, index) => (
                                <div
                                    key={index}
                                    className={
                                        "experience-bubble bg-white  rounded p-4 mb-4 " +
                                        (darkTheme ? "bg-dark" : "bg-white border")
                                    }
                                >
                                    <div className="badge bg-secondary text-2 fw-400" style={{ marginBottom: '20px' }}>
                                        {value.yearRange}
                                    </div>
                                    <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                                        {value.title}
                                    </h3>
                                    <div className={darkTheme ? "text-primary" : "text-danger"}>
                                        {value.place}
                                    </div>
                                    {/* <br /> */}
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc}
                                    </div>
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc2}
                                    </div>
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc3}
                                    </div>
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc4}
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* My Education */}
                    <div className="col-md-6">
                        <h2
                            className={
                                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
                            }
                        >
                            Education
                        </h2>
                        {educationDetails.length > 0 &&
                            educationDetails.map((value, index) => (
                                <div
                                    key={index}
                                    className={
                                        "education-bubble bg-white  rounded p-4 mb-4 " +
                                        (darkTheme ? "bg-dark" : "bg-white border")
                                    }
                                >
                                    <div className="badge bg-secondary text-2 fw-400" style={{ marginBottom: '20px' }}>
                                        {value.yearRange}
                                    </div>
                                    <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                                        {value.title}
                                    </h3>
                                    <div className={darkTheme ? "text-primary" : "text-danger"}>
                                        {value.place}
                                    </div>
                                    {/* <br /> */}
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc}
                                    </div>
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc2}
                                    </div>
                                    <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                                        {value.desc3}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                {/* My Skills */}
                <h2
                    className={
                        "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
                    }
                    id="my-skills"
                >
                    <span >Technologies</span>
                </h2>
                <br />
                {/* <div className="row gx-5">
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
                  {index !== 7 ? <span className="float-end">{skill.percent}%</span> : <span className="float-end">{skill.percent}</span>} */}
                {/* <img src="../../public/images/profile.jpg" alt="skill" /> */}
                {/* </p>
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
              </div> */}
                {/* ))}
                <br />
                <br />
                {/* <br /> */}
                <div className="technology-rows">
                    <div className="icon">
                        <i className="devicon-javascript-plain colored"></i>
                        <span className="icon-label">JavaScript</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-typescript-plain colored"></i>
                        <span className="icon-label">TypeScript</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-react-original colored"></i>
                        <span className="icon-label">React</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-redux-original colored"></i>
                        <span className="icon-label">Redux</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-express-original colored"></i>
                        <span className="icon-label">Express</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-nodejs-plain colored"></i>
                        <span className="icon-label">Node</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-jquery-plain colored"></i>
                        <span className="icon-label">jQuery</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-python-plain colored"></i>
                        <span className="icon-label">Python</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-django-plain colored"></i>
                        <span className="icon-label">Django</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-ruby-plain colored"></i>
                        <span className="icon-label">Ruby</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-rails-plain colored"></i>
                        <span className="icon-label">Rails</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-html5-plain colored"></i>
                        <span className="icon-label">HTML</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-css3-plain colored"></i>
                        <span className="icon-label">CSS</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-materialui-plain colored"></i>
                        <span className="icon-label">MaterialUI</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-mongodb-plain colored"></i>
                        <span className="icon-label">MongoDB</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-postgresql-plain colored"></i>
                        <span className="icon-label">PostgreSQL</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-sqlite-plain colored"></i>
                        <span className="icon-label">SQLite</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-github-original colored"></i>
                        <span className="icon-label">GitHub</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-webpack-plain colored"></i>
                        <span className="icon-label">Webpack</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-electron-original colored"></i>
                        <span className="icon-label">Electron</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-amazonwebservices-original colored"></i>
                        <span className="icon-label">AWS</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-figma-plain colored"></i>
                        <span className="icon-label">Figma</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-canva-plain colored"></i>
                        <span className="icon-label">Canva</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-jest-plain colored"></i>
                        <span className="icon-label">Jest</span>
                    </div>
                    <div className="icon">
                        <i className="devicon-rspec-original colored"></i>
                        <span className="icon-label">RSpec</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
