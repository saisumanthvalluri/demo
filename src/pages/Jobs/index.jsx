import React, { useState } from "react";
import { IoMdShare, IoIosHeartEmpty, IoMdDownload, IoIosInformationCircle } from "react-icons/io";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import JobFilters from "./Filters";
import { jobsData } from "../../Config/constants";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
    const navigate = useNavigate();
    const [jobTabId, setJobTabId] = useState(2);

    const goToJobDetails = (id) => {
        navigate(`/job?job_id=${id}`);
    };

    return (
        <>
            <DynamicHeader type="inner" />
            <div className="jobs-bg">
                <div className="jobs-body">
                    <JobFilters jobTabId={jobTabId} setJobTabId={setJobTabId} />

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
                                        <button onClick={() => goToJobDetails(job.id)}>
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
