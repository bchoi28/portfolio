import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
    // init one ref to store the future isotope object
    const isotope = useRef();

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

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*");
    const [imagesLoaded, setimagesLoaded] = useState(0);
    const [selectedProjectDetails, setSelectedProjectDetails] = useState();

    const filters = {
        JAVASCRIPT: "JavaScript",
        RUBY: "Ruby",
        // PYTHON: "Python",
    };

    const projectsData = [
        {
            id: 1,
            logo:
                <a href="https://bchoi28.github.io/myFitnessBuddy/" target="_blank" rel="noreferrer"><img style={{ width: '500px', marginTop: '-20px' }} src="images/projects/project-1-logo.png" alt="myFitnessBuddy" /></a>
            ,
            title: "myFitnessBuddy",
            projectInfo:
                "myFitnessBuddy, a single-page, web application, developed with only Vanilla JavaScript, can serve as your personal workout routine generator. Users can store up to 4 exercises at a time in a dynamic navigation carousel.",
            // client: "Ruby Clinton",
            technologies: "JavaScript, HTML5/CSS3, ExerciseDB (API)",
            category: "Health & Fitness",
            url: {
                name: "myFitnessBuddy",
                link: "https://bchoi28.github.io/myFitnessBuddy/",
            },
            socialLinks: {
                github: "https://github.com/bchoi28/myFitnessBuddy",
                // twitter: "http://www.twitter.com/",
                // google: "http://www.google.com/",
                // instagram: "http://www.instagram.com/",
                // mail: "mailto:example@gmail.com",
            },
            thumbImage: "images/projects/project-1.png",
            firstImage: "images/projects/project-1-slide.png",
            sliderImages: [
                "images/projects/project-1.gif",
            ],
            categories: [filters.JAVASCRIPT],
        },
        {
            id: 2,
            logo: <a href="https://nexus-zblj.onrender.com/" target="_blank" rel="noreferrer" ><img style={{ width: '280px', marginTop: '-10px' }} src="images/projects/project-2-logo-white.png" alt="NexUs" /></a>,
            title: "NexUs",
            projectInfo:
                "Join NexUs, the inter-universal professional networking social-media application inspired by LinkedIn. Connect with others AND yourself/yourselves from across the Multiverse, and take your networking to new frontiers. Feel free to make a new account or login as a demo user, and make your first post!",
            // client: "Ruby Clinton",
            technologies: "React-Redux, Ruby on Rails, HTML5/CSS3, PostgreSQL, AWS S3, Render (hosting)",
            category: "Social Media/Professional Networking",
            url: {
                name: "NexUs",
                link: "https://nexus-zblj.onrender.com/",
            },
            socialLinks: {
                github: "https://github.com/bchoi28/NexUs"
                //   twitter: "http://www.twitter.com/",
                //   google: "http://www.google.com/",
                //   instagram: "http://www.instagram.com/",
                //   mail: "mailto:example@gmail.com",
            },
            thumbImage: "images/projects/project-2-thumb.png",
            firstImage: "images/projects/project-2-gif1.gif",
            sliderImages: [
                "images/projects/project-2-gif2.gif",
                "images/projects/project-2-gif3.gif",
                "images/projects/project-2-slide-4.png"
            ],
            categories: [filters.JAVASCRIPT, filters.RUBY],
        },
        {
            title: "itinerator",
            id: 3,
            logo: <a href="https://excursionexplorer.onrender.com/" target="_blank" rel="noreferrer" ><img style={{ width: '280px', marginTop: '-15px', marginBottom: '-25px' }} src="images/projects/project-3-logo.png" alt="itinerator" /></a>,
            projectInfo:
                "Planning a trip abroad or feeling spontaneous with your friends, but feeling overwhelmed by decision-fatigue? Look no further! Harnessing the power of Google Maps API, itinerator will be your ultimate itinerary planning guide.",
            // client: "Ruby Clinton",
            technologies: "MERN stack (MongoDB, Express.js, React, Node.js), Google Maps JavaScript API (Places Library, Geocoding Service), HTML5 Geolocation API, HTML5/CSS3, Render (hosting)",
            category: "Travel & Leisure",
            // date: "July 16, 2019",
            url: {
                name: "itinerator",
                link: "https://excursionexplorer.onrender.com/",
            },
            socialLinks: {
                github: "https://github.com/dtannyc1/itinerator",
                // twitter: "http://www.twitter.com/",
                // google: "http://www.google.com/",
                // instagram: "http://www.instagram.com/",
                // mail: "mailto:example@gmail.com",
            },
            thumbImage: "images/projects/project-3-thumb.png",
            firstImage: "images/projects/project-3-gif1.gif",
            sliderImages: [
                "images/projects/project-3-gif2.gif",
                "images/projects/project-3-gif3.gif",
            ],
            categories: [filters.JAVASCRIPT],
        },
        // {
        //   title: "Project Title 4",
        //   projectInfo:
        //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        //   client: "Ruby Clinton",
        //   technologies: "iOS, HTML5, CSS3, PHP, Java",
        //   industry: "Art & Design",
        //   date: "July 16, 2019",
        //   url: {
        //     name: "www.example.com",
        //     link: "https://www.example.com",
        //   },
        //   socialLinks: {
        //     facebook: "http://www.facebook.com/",
        //     twitter: "http://www.twitter.com/",
        //     google: "http://www.google.com/",
        //     instagram: "http://www.instagram.com/",
        //     mail: "mailto:example@gmail.com",
        //   },
        //   thumbImage: "images/projects/project-4.jpg",
        //   sliderImages: [
        //     "images/projects/project-1.jpg",
        //     "images/projects/project-4.jpg",
        //   ],
        //   categories: [filters.BRAND, filters.PHOTOS],
        // },
        // {
        //   title: "Project Title 5",
        //   projectInfo:
        //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        //   client: "Ruby Clinton",
        //   technologies: "iOS, HTML5, CSS3, PHP, Java",
        //   industry: "Art & Design",
        //   date: "July 16, 2019",
        //   url: {
        //     name: "www.example.com",
        //     link: "https://www.example.com",
        //   },
        //   socialLinks: {
        //     facebook: "http://www.facebook.com/",
        //     twitter: "http://www.twitter.com/",
        //     google: "http://www.google.com/",
        //     instagram: "http://www.instagram.com/",
        //     mail: "mailto:example@gmail.com",
        //   },
        //   thumbImage: "images/projects/project-5.jpg",
        //   sliderImages: [
        //     "images/projects/project-1.jpg",
        //     "images/projects/project-5.jpg",
        //   ],
        //   categories: [filters.DESIGN],
        // },
        // {
        //   title: "Project Title 6",
        //   projectInfo:
        //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        //   client: "Ruby Clinton",
        //   technologies: "iOS, HTML5, CSS3, PHP, Java",
        //   industry: "Art & Design",
        //   date: "July 16, 2019",
        //   url: {
        //     name: "www.example.com",
        //     link: "https://www.example.com",
        //   },
        //   socialLinks: {
        //     facebook: "http://www.facebook.com/",
        //     twitter: "http://www.twitter.com/",
        //     google: "http://www.google.com/",
        //     instagram: "http://www.instagram.com/",
        //     mail: "mailto:example@gmail.com",
        //   },
        //   thumbImage: "images/projects/project-6.jpg",
        //   sliderImages: [
        //     "images/projects/project-1.jpg",
        //     "images/projects/project-5.jpg",
        //   ],
        //   categories: [filters.BRAND],
        // },
        // {
        //   title: "Project Title 7",
        //   projectInfo:
        //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        //   client: "Ruby Clinton",
        //   technologies: "iOS, HTML5, CSS3, PHP, Java",
        //   industry: "Art & Design",
        //   date: "July 16, 2019",
        //   url: {
        //     name: "www.example.com",
        //     link: "https://www.example.com",
        //   },
        //   socialLinks: {
        //     facebook: "http://www.facebook.com/",
        //     twitter: "http://www.twitter.com/",
        //     google: "http://www.google.com/",
        //     instagram: "http://www.instagram.com/",
        //     mail: "mailto:example@gmail.com",
        //   },
        //   thumbImage: "images/projects/project-7.jpg",
        //   sliderImages: [
        //     "images/projects/project-1.jpg",
        //     "images/projects/project-5.jpg",
        //   ],
        //   categories: [filters.DESIGN, filters.PHOTOS],
        // },
    ];

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-filter", {
            itemSelector: ".filter-item",
            layoutMode: "masonry",
        });

        // cleanup
        return () => {
            isotope.current.destroy();
        };
    }, []);

    // handling filter key change
    useEffect(() => {
        if (imagesLoaded) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey, imagesLoaded]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.5
        });

        observer.observe(ref1.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section
                id="portfolio"
                className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
            >
                <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
                    {/* Heading */}
                    <div ref={ref1} className="position-relative d-flex text-center mb-5">
                        <h2
                            ref={ref2}
                            className={
                                "heading1 text-24  text-uppercase fw-600 w-100 mb-0 " +
                                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                            }
                        >
                            Portfolio
                        </h2>
                        <p
                            ref={ref3}
                            className={
                                "paragraph1 text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                                (darkTheme ? "text-white" : "text-dark")
                            }
                        >
                            {" "}
                            My Work
                            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                        </p>
                    </div>
                    {/* Heading end*/}
                    {/* Filter Menu */}
                    <ul
                        className={
                            "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
                            (darkTheme ? "nav-light" : "")
                        }
                    >
                        <li className="nav-item">
                            <button
                                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                                onClick={handleFilterKeyChange("*")}
                            >
                                All
                            </button>
                        </li>
                        {Object.keys(filters).map((oneKey, i) => (
                            <li className="nav-item" key={i}>
                                <button
                                    className={
                                        "nav-link " +
                                        (filterKey === filters[oneKey] ? "active" : "")
                                    }
                                    onClick={handleFilterKeyChange(filters[oneKey])}
                                >
                                    {filters[oneKey]}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Filter Menu end */}
                    <div className="portfolio popup-ajax-gallery">
                        <div className="row portfolio-filter filter-container g-4">
                            {projectsData.length > 0 &&
                                projectsData.map((project, index) => (
                                    <div
                                        className={
                                            "col-sm-6 col-lg-4 filter-item " +
                                            project.categories.join(" ")
                                        }
                                        key={index}
                                    >
                                        <div className="portfolio-box rounded">
                                            <div className="portfolio-img rounded">
                                                <img
                                                    onLoad={() => {
                                                        setimagesLoaded(imagesLoaded + 1);
                                                    }}
                                                    className="img-fluid d-block portfolio-image"
                                                    id={`thumbImage${project.id}`}
                                                    src={project.thumbImage}
                                                    alt=""
                                                />
                                                <div className="portfolio-overlay">
                                                    <a
                                                        className="popup-ajax stretched-link"
                                                        // href=""
                                                        onClick={() => {
                                                            setSelectedProjectDetails(projectsData[index]);
                                                        }}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    />
                                                    <div className="portfolio-overlay-details">
                                                        <h5 className="text-white fw-400">
                                                            {project.title}
                                                        </h5>
                                                        <span className="text-light">{project.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="project-details-modal">
                {/* Modal */}
                <ProjectDetailsModal
                    projectDetails={selectedProjectDetails}
                    darkTheme={darkTheme}
                ></ProjectDetailsModal>
            </div>
        </>
    );
};

export default Portfolio;
