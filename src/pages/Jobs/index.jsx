import React, { useRef, useState } from "react";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosArrowDown,
    IoMdShare,
    IoIosHeartEmpty,
    IoMdDownload,
    IoIosInformationCircle,
} from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";

const jobTabs = [
    { id: 1, title: "All India Govt. Jobs" },
    { id: 2, title: "State Govt. Jobs" },
    { id: 3, title: "Bank Jobs" },
    { id: 4, title: "Finance" },
    { id: 5, title: "Teaching Jobs" },
    { id: 6, title: "Engineering Jobs" },
    { id: 7, title: "Railway Jobs" },
    { id: 8, title: "IT & Software" },
    { id: 9, title: "Education & Training" },
    { id: 10, title: "Management & Leadership" },
    { id: 11, title: "Agriculture & Farming" },
    { id: 12, title: "Construction & Engineering" },
    { id: 13, title: "Tourism & Hospitality" },
];

const jobsData = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Arogya Mitras & Team Leaders - 19 Posts",
        jobDescription:
            "Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.",
        qualification: "B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Ph armacy-D/B.Sc",
        post_date: "12 Feb, 2023",
        last_date: "12 Mar, 2023",
        applicationFee: [
            { id: 1, item: "For UR/EWS/OBC : Rs. 1,180/-" },
            { id: 2, item: "For SC/ ST/PwBD/Women :NiL" },
            { id: 3, item: "Payment Mode: Demand Draft or in the form of NEFT" },
        ],
        imp_dates: [{ id: 1, item: "Date for Interview: 21-05-2024" }],
        ageLimit: [
            {
                id: 1,
                item: "Upper Age Limit: 45 Years",
            },
            {
                id: 2,
                item: "Age Relaxation is Applicable As Per Rules",
            },
        ],

        qulaification: "Candidates Should Possess PG (MD/MS/DNB/MDS or DM,MCH)/M.Sc/Ph.D (Concerned Specialty)",
        vacancyDetails: [
            {
                postName: "Sn. Doctor",
                total: 2,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D (Relevant Engg)",
            },
            {
                postName: "Jr. Doctor",
                total: 4,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
            {
                postName: "Sub. Doctor",
                total: 6,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
        ],
    },
    {
        id: 2,
        title: "Senior Software Engineer",
        company: "Arogya Mitras & Team Leaders - 19 Posts",
        jobDescription:
            "Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.",
        qualification: "B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Ph armacy-D/B.Sc",
        post_date: "12 Feb, 2023",
        last_date: "12 Mar, 2023",
        applicationFee: [
            { id: 1, item: "For UR/EWS/OBC : Rs. 1,180/-" },
            { id: 2, item: "For SC/ST/PwBD/Women :NiL" },
            { id: 3, item: "Payment Mode: Demand Draft or in the form of NEFT" },
        ],
        imp_dates: [
            { id: 1, item: "Date for Interview: 21-05-2024" },
            { id: 2, item: "Announcement: 11 Feb, 2023" },
            { id: 3, item: "Application Opening: 15 Feb, 2023" },
        ],
        ageLimit: [{ id: 1, item: "Upper Age Limit: 45 Years" }],
        qulaification: "Candidates Should Possess PG (MD/MS/DNB/MDS or DM,MCH)/M.Sc/Ph.D (Concerned Specialty)",
        vacancyDetails: [
            {
                postName: "Sn. Doctor",
                total: 2,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D (Relevant Engg)",
            },
            {
                postName: "Jr. Doctor",
                total: 4,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
        ],
    },
];

const Jobs = () => {
    const tabsContainerRef = useRef(null);
    const linksContainerRef = useRef(null);

    const [jobTabId, setJobTabId] = useState(2);

    const onScrollTabs = (container, val) => {
        if (container.current) {
            container.current.scrollBy({
                left: val,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <DynamicHeader type="inner" />
            <div className="jobs-bg">
                <div className="jobs-body">
                    <div className="tabs-box">
                        <div className="job-tabs-box">
                            <IoIosArrowBack className="nav-icon" onClick={() => onScrollTabs(tabsContainerRef, -250)} />
                            <ul className="tabs" ref={tabsContainerRef}>
                                {jobTabs.map((e) => (
                                    <li
                                        key={e.id}
                                        className={jobTabId === e.id ? "active" : ""}
                                        onClick={() => setJobTabId(e.id)}>
                                        {e.title}
                                    </li>
                                ))}
                            </ul>
                            <IoIosArrowForward
                                className="nav-icon"
                                onClick={() => onScrollTabs(tabsContainerRef, 250)}
                            />
                        </div>
                        <div className="links-box">
                            <IoIosArrowBack
                                className="nav-icon"
                                onClick={() => onScrollTabs(linksContainerRef, -250)}
                            />
                            <ul className="links" ref={linksContainerRef}>
                                <li>Syllabus</li>
                                <li>PQP</li>
                                <li>Answer Key</li>
                                <li>Results</li>
                                <li>Cut-Off</li>
                            </ul>
                            <IoIosArrowForward
                                className="nav-icon"
                                onClick={() => onScrollTabs(linksContainerRef, 250)}
                            />
                        </div>
                    </div>
                    <div className="filters-box">
                        <h4>{jobTabs[jobTabId - 1].title}</h4>
                        <div className="filters">
                            <div>
                                <span>All</span>
                            </div>
                            <div>
                                <span>Andhra Pradesh</span>
                                <IoIosArrowDown className="icon" />
                            </div>
                            <div>
                                <span>Qualification</span>
                                <IoIosArrowDown className="icon" />
                            </div>
                        </div>
                        <div className="mob-filters">
                            <IoFilter />
                            <span>Filters</span>
                        </div>
                    </div>

                    {/* Jobs List */}
                    <ul className="jobs-list">
                        {jobsData.map((job) => (
                            <li key={job.id}>
                                <div className="job-desc">
                                    <h5>{job.title}</h5>
                                    <span>{job.company}</span>
                                    <p>{job.jobDescription}</p>
                                </div>
                                <div className="job-details">
                                    <p>
                                        <span>Qualification:</span> {job.qualification}
                                    </p>
                                    <p>
                                        <span>Post Date:</span> {job.post_date}
                                    </p>
                                    <p>
                                        <span>Last Date:</span> {job.last_date}
                                    </p>
                                </div>
                                <div className="job-actions">
                                    <div>
                                        <IoMdShare className="icon" />
                                        <IoIosHeartEmpty className="icon" />
                                    </div>
                                    <div>
                                        <button className="notif">
                                            <IoMdDownload /> Notification
                                        </button>
                                        <button>
                                            <IoIosInformationCircle />
                                            view more
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Jobs;
