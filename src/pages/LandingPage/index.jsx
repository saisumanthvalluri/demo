import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DynamicHeader from "../../Components/DynamicHeader";
import BasicCarousel from "../../Components/Carousel";
import "./index.css";
import Footer from "../../Components/Footer";

const notifications = [
    {
        category: "SSC NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
    {
        category: "UPSC NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
    {
        category: "BANK NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
];

const faqs = [
    {
        question: "1.What government positions are most frequently sought after in India?",
        answer: "The most common government jobs in India are that of an army officer, navy officer, air force officer, clerk and probationary officer.",
    },
    {
        question: "2.What is UPSC?",
        answer: "UPSC is an Indian national examination conducted by the Union Public Service Commission (UPSC) in India. It covers 35 subjects, including English, Mathematics, Physics, Chemistry, Biology, Computer Science, History, Geography, Physical Education, Civics, Social Studies, Languages, Art, Science, and Humanities.",
    },
    {
        question: "3.What is BANK POWER?",
        answer: "Bank Power is a combination of Banking, In",
    },
    {
        question: "4. What is the role of a bank in India?",
        answer: "Banks play a crucial role in India by providing financial services, including banking, insurance, and loans. They facilitate transactions, handle deposits, and manage assets and liabilities.",
    },
    {
        question: "5. What is the role of a clerk in India?",
        answer: "Clerks are employees of a government department or agency that perform tasks such as collecting and processing official documents, filling in forms, and maintaining records.",
    },
];

const collaborators = [
    {
        id: 1,
        img: "/landingPage/collaborators/insu_exam.svg",
        alt: "insu_exam",
        name: "INSURRANCE EXAM PODCAST",
        url: "https://www.insuexam.gov.in/",
    },
    {
        id: 2,
        img: "/landingPage/collaborators/digilocaker.svg",
        alt: "Digilocaker",
        name: "DIGILOCKER",
        url: "https://www.digilocaker.com/",
    },
    {
        id: 3,
        img: "/landingPage/collaborators/ncs.svg",
        alt: "NCS",
        name: "Natiocal Career Service",
        url: "https://www.ncs.com/",
    },
    {
        id: 4,
        img: "/landingPage/collaborators/sbi.svg",
        alt: "SBI",
        name: "SBI",
        url: "https://www.sbi.com/",
    },
    {
        id: 5,
        img: "/landingPage/collaborators/ssc.svg",
        alt: "SSC",
        name: "SSC",
        url: "https://www.ssc.com/",
    },
    {
        id: 6,
        img: "/landingPage/collaborators/indian_railway.svg",
        alt: "indian_railway",
        name: "Indian Railway",
        url: "https://www.indianrailways.com/",
    },
    {
        id: 7,
        img: "/landingPage/collaborators/upsc.svg",
        alt: "UPSC",
        name: "UPSC",
        url: "https://www.upsc.com/",
    },
    {
        id: 8,
        img: "/landingPage/collaborators/ibps.svg",
        alt: "IBPS",
        name: "IBPS",
        url: "https://www.ibps.com/",
    },
    {
        id: 9,
        img: "/landingPage/collaborators/gap.svg",
        alt: "Gov. of AP",
        name: "Govt. Of AP",
        url: "https://www.govofap.com/",
    },
    {
        id: 10,
        img: "/landingPage/collaborators/dp.svg",
        alt: "Delhi Police",
        name: "Delhi Police",
        url: "https://www.delhipolice.com/",
    },
];

const LandingPage = () => {
    // NotificationItem Component
    const NotificationItem = ({ item }) => (
        <div className="notification-item">
            <div className="date-badge-box">
                {item.new && <span className="new-badge">New</span>}
                <span className="date">{item.date}</span>
            </div>
            <p className="desc">{item.desc}</p>
            <button className="view-button">view</button>
        </div>
    );

    // NotificationCategory Component
    const NotificationCategory = ({ category, items }) => (
        <div className="notification-category">
            <h2>{category}</h2>
            <div className="notifications">
                {items.map((item) => (
                    <NotificationItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );

    // NotificationList Component
    const NotificationList = (title) => (
        <div className="notification-list">
            <div className="top">
                <div className="title-box">
                    <NotificationsOutlinedIcon className="bell" />
                    <h3>{title}</h3>
                </div>
                <Link className="view-all">View All</Link>
            </div>
            <div className="all-cate-list">
                {notifications.map((notification) => (
                    <NotificationCategory
                        key={notification.category}
                        category={notification.category}
                        items={notification.items}
                    />
                ))}
            </div>
            <Pagination count={10} color="primary" className="pagination" siblingCount={0} />
        </div>
    );

    return (
        <>
            <DynamicHeader type="outer" />
            <div className="landing-bg">
                <div className="carousel-box">
                    <BasicCarousel />
                </div>
                {NotificationList("Notifications")}
                {NotificationList("Upcoming Notifications")}
                <div className="about-section" id="ABOUT">
                    <div className="sections-title-box">
                        <img src="/landingPage/section_tag_before.svg" alt="border" />
                        <h2>About Us</h2>
                        <img src="/landingPage/section_tag_after.svg" alt="border" />
                    </div>
                    <img src="/landingPage/about.svg" alt="about" className="about-banner" />
                    <p>
                        Maawaabro IT Solutions Pvt Ltd is a leading IT solution provider based in guntur, Andhra
                        Pradesh, India. where our passion for public sector job seekers shines through in our dedicated
                        services. Our platform is carefully crafted to be your top destination for accessing government
                        job opportunities with ease. We take pride in providing timely job alerts, simplifying the
                        application process, and offering extensive support to our applicants. With our in-depth
                        knowledge of government positions, our team is committed to being a reliable for individuals
                        seeking to make a meaningful impact through public service.
                    </p>

                    <div className="vision-mission">
                        <div className="vision">
                            <h3>Vision :</h3>
                            <p>
                                Maawaabro IT Solutions Pvt Ltd envisions leveraging technology to revolutionize job
                                search, ensuring tailored opportunities for all and driving professional fulfillment and
                                societal progress.
                            </p>
                        </div>
                        <img
                            src="/landingPage/vision_mission.svg"
                            alt="vision-mission"
                            className="vision-mission-img"
                        />
                        <div className="mission">
                            <h3>Mission :</h3>
                            <p>
                                Maawaabro IT Solutions Pvt Ltd aims to empower job seekers and employers by bridging
                                talent and opportunity. Our platform offers insights and matches based on industry
                                trends, salary benchmarks, and cultural fit. Powered by AI and analytics, we provide a
                                comprehensive career ecosystem for mutual growth and success.
                            </p>
                        </div>
                    </div>
                    <div className="future-goals">
                        <img src="/landingPage/vision_mission.svg" alt="future-goals" className="future-goals-img" />
                        <h3>Future Goals</h3>
                        <span>Maawaabro IT Solutions Pvt Ltd aims to:</span>
                        <ul>
                            <li>Innovate by investing in research and development for cutting-edge AI technology.</li>
                            <li>Expand globally in the employment services industry strategically.</li>
                            <li>
                                Educate job seekers and collaborate with institutions, industry leaders, and
                                policymakers for a supportive employment landscape.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faqs-section" id="FAQS">
                    <div className="sections-title-box">
                        <img src="/landingPage/section_tag_before.svg" alt="border" />
                        {/* <h2>Frequently Asked Questions</h2> */}
                        <h2>FAQ's</h2>
                        <img src="/landingPage/section_tag_after.svg" alt="border" />
                    </div>
                    <div className="faq-filter">
                        <button>Website</button>
                        <button>Securities</button>
                        <button className="active">OTR</button>
                        <button>Payments</button>
                        <button>Delivery</button>
                    </div>
                    <ul className="faq-list">
                        {faqs.map((e) => (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p>{e.question}</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <span>{e.answer}</span>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </ul>
                </div>
                <ul className="collab-list">
                    {collaborators.map((e) => (
                        <li key={e.id}>
                            <img src={e.img} alt={e.alt} />
                            {/* <span>{e.name}</span> */}
                        </li>
                    ))}
                </ul>
                <div className="contact-us" id="CONTACTUS">
                    <div className="sections-title-box">
                        <img src="/landingPage/section_tag_before.svg" alt="border" />
                        <h2>Contact Us</h2>
                        <img src="/landingPage/section_tag_after.svg" alt="border" />
                    </div>
                    <img src="/landingPage/contact-us-banner.svg" alt="contact us" />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
