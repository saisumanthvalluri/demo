import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { collaborators, faqs, jobNotifications, statesWithAddress } from "../../Config/constants";

const LandingPage = () => {
    const navigate = useNavigate();
    const [activeStateId, setActiveStateId] = useState(0);
    // NotificationItem Component
    const NotificationItem = ({ item }) => (
        <div className="notification-item">
            <div className="date-badge-box">
                {item.new && <span className="new-badge">New</span>}
                <span className="date">{item.date}</span>
            </div>
            <p className="desc">{item.desc}</p>
            <button className="view-button" onClick={() => navigate("/auth")}>
                view
            </button>
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
                {jobNotifications.map((notification) => (
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
                        <img src="/landingPage/future-goals.svg" alt="future-goals" className="future-goals-img" />
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
                            <Accordion key={e.question}>
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

                    <ul className="states-box">
                        {statesWithAddress.map((state, index) => (
                            <li
                                key={state.name}
                                className={index === activeStateId ? "active" : ""}
                                onClick={() => setActiveStateId(index)}>
                                {state.name}
                            </li>
                        ))}
                    </ul>
                    <div className="address-box">
                        <div className="table-box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Branch Name</th>
                                        <th>Phone Number</th>
                                        <th>Email ID</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{statesWithAddress[activeStateId].address.branchName}</td>
                                        <td>
                                            {statesWithAddress[activeStateId].address.phone.map((e) => (
                                                <p key={e}>{e}</p>
                                            ))}
                                        </td>
                                        <td>{statesWithAddress[activeStateId].address.email}</td>
                                        <td>{statesWithAddress[activeStateId].address.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pernt-add-box">
                        <p>
                            Permanent Address : - 11-41,Radham Bazar, Kanagala, Cherukupalli,Guntur,AP, India - 522259.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
