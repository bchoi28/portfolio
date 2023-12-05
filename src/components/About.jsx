import React, { useEffect, useRef, useState } from "react";
import resumeFile from "../documents/BrandonChoi_Resume.pdf";
import resumeQR from "../documents/resume_dynamic_plain.png";

const AboutUs = ({ classicHeader, darkTheme }) => {

    // const codingLanguagesRef = useRef(null);

    const headingRef = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const countRef = useRef(null);
    const sizeRef = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const [countRefObserved, setCountRefObserved] = useState(false);

    const [codingLanguagesNum, setCodingLanguagesNum] = useState(0);
    const [codingProjectsNum, setCodingProjectsNum] = useState(0);
    const [workEnvironmentsNum, setWorkEnvironmentsNum] = useState(0);
    const [yearsExperienceNum, setYearsExperienceNum] = useState(0);

    const handleHeadingIntersect = (entries) => {
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

    const handleCountIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setCountRefObserved(true);
            } else {
                setCountRefObserved(false);
                setCodingLanguagesNum(0);
                setCodingProjectsNum(0);
                setWorkEnvironmentsNum(0);
                setYearsExperienceNum(0);
            }
        });
    };

    const handleSizeIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                ref5.current.classList.add('visible-stat');
                ref6.current.classList.add('visible-stat')
                ref7.current.classList.add('visible-stat')
                ref8.current.classList.add('visible-stat')
            } else {
                ref5.current.classList.remove('visible-stat')
                ref6.current.classList.remove('visible-stat')
                ref7.current.classList.remove('visible-stat')
                ref8.current.classList.remove('visible-stat')
            }
        });
    };

    useEffect(() => {
        const headingObserver = new IntersectionObserver(handleHeadingIntersect, {
            threshold: 0.5
        });
        headingObserver.observe(headingRef.current);

        const countRefObserver = new IntersectionObserver(handleCountIntersect, {
            threshold: 1
        });
        countRefObserver.observe(countRef.current);

        const sizeRefObserver = new IntersectionObserver(handleSizeIntersect, {
            threshold: 1
        })
        sizeRefObserver.observe(sizeRef.current)

        return () => {
            headingObserver.disconnect();
            countRefObserver.disconnect();
            sizeRefObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        if (countRefObserved) {
            let count = 5
            const interval = setTimeout(() => {
                if (codingLanguagesNum < count) {
                    setCodingLanguagesNum(codingLanguagesNum + 1)
                }
            }, 100)

            return () => {
                clearTimeout(interval);
            }
        }
    }, [codingLanguagesNum, countRefObserved]);

    useEffect(() => {
        if (countRefObserved) {

            let count = 42
            const interval = setTimeout(() => {
                if (codingProjectsNum < count) {
                    setCodingProjectsNum(codingProjectsNum + 1)
                }
            }, 50);

            return () => {
                clearTimeout(interval);
            }
        }
    }, [codingProjectsNum, countRefObserved]);

    useEffect(() => {
        if (countRefObserved) {

            let count = 15
            const interval = setTimeout(() => {
                if (workEnvironmentsNum < count) {
                    setWorkEnvironmentsNum(workEnvironmentsNum + 1)
                }
            }, 100);

            return () => {
                clearTimeout(interval);
            }
        }
    }, [workEnvironmentsNum, countRefObserved]);

    useEffect(() => {
        if (countRefObserved) {

            let count = 10
            const interval = setTimeout(() => {
                if (yearsExperienceNum < count) {
                    setYearsExperienceNum(yearsExperienceNum + 1)
                }
            }, 100);

            return () => {
                clearTimeout(interval);
            }
        }
    }, [yearsExperienceNum, countRefObserved]);

    return (
        <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
            <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
                {/* Heading */}
                <div ref={headingRef} className="position-relative d-flex text-center mb-5">
                    <h2
                        ref={ref2}
                        className={
                            "heading1 text-24  text-uppercase fw-600 w-100 mb-0 " +
                            (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                        }
                    >
                        About Me
                    </h2>
                    <p
                        ref={ref3}
                        className={
                            "paragraph1 text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
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
                            I'm <span className="text-primary">Brandon Choi,</span> a Full-stack Software Engineer.
                        </h2>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            As a former Doctor of Physical Therapy, I have always been driven by an obsession with <strong>detail</strong> and a desire to make a positive impact on people's lives.
                            My ability to understand complex systems and my passion for solving problems has enabled me to transition (more seamlessly than you might think) from debugging human bodies to engineering the <strong>stack</strong>!
                        </p>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            My greatest coding language strengths at the moment are <strong>JavaScript (React, VanillaJS) </strong> and <strong>Ruby</strong>, and I'm currently learning Python and TypeScript. Although my affinity is for coding the full stack, I naturally lean <strong>front-end</strong> because of my love for design and user-centric development.
                        </p>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            When I'm not expanding my engineering toolkit, you'll likely find me playing basketball with friends, engaging in contemplative reflections on the mysteries of the cosmos, or enjoying a nice batch of sardines &#x1F41f; (lightly smoked).
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
                                target="_blank"
                                rel="noreferrer"
                                href={resumeFile}
                                // download
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
                                <h4 ref={countRef}
                                    className={
                                        "text-12  mb-0 " +
                                        (darkTheme ? "text-white-50" : "text-muted")
                                    }
                                >
                                    <span>{codingLanguagesNum}</span>
                                </h4>
                                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    <div id="coding-languages" >Coding Languages</div>
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
                                    <span>{codingProjectsNum}</span>
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
                                    <span>{workEnvironmentsNum}</span>
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
                                    <span>{yearsExperienceNum}</span>+
                                </h4>
                                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    Years Experience (of coffee-drinking)
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div ref={ref5} className="stat featured-box text-center">
                                <h4 ref={sizeRef}
                                    className={
                                        "text-12  mb-0 " +
                                        (darkTheme ? "text-white-50" : "text-muted")
                                    }
                                >
                                    <span style={{ fontSize: '1rem' }} >Learning:</span>
                                </h4>
                                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    <a style={{ fontSize: '24px' }} href="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python/2023-05" target="_blank" rel="noreferrer">Python</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div ref={ref6} className="stat featured-box text-center">
                                <h4
                                    className={
                                        "text-12  mb-0 " +
                                        (darkTheme ? "text-white-50" : "text-muted")
                                    }
                                >
                                    <span style={{ fontSize: '1rem' }}>Reading:</span>
                                </h4>
                                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    <a style={{ fontSize: '24px' }} href="https://eloquentjavascript.net/" target="_blank" rel="noreferrer">Eloquent JavaScript</a>
                                </p>
                                <br />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div ref={ref7} className="stat featured-box text-center">
                                <h4
                                    className={
                                        "text-12  mb-0 " +
                                        (darkTheme ? "text-white-50" : "text-muted")
                                    }
                                >
                                    <span style={{ fontSize: '1rem' }}>Listening:</span>
                                </h4>
                                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    <a style={{ fontSize: '24px' }} href="https://www.youtube.com/watch?v=LqRZ2_w56U0" target="_blank" rel="noreferrer">Time - Hans Zimmer</a>
                                </p>
                                <br />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div ref={ref8} className="stat featured-box text-center">
                                <h4
                                    className={
                                        "text-12  mb-0 " +
                                        (darkTheme ? "text-white-50" : "text-muted")
                                    }
                                >
                                    <span style={{ fontSize: '1rem' }}>Growth</span>
                                </h4>
                                <p style={{ fontSize: '24px' }} className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                                    Mindset                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* projects rewards counting end */}
            </div>
        </section >
    );
};

export default AboutUs;
