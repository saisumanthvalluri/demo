import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { IoMdShare, IoMdDownload, IoIosInformationCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import "./index.css";
import { jobsData } from "../../../Config/constants";

const SavedJobs = ({ back }) => {
    const navigate = useNavigate();

    const goToJobDetails = (id) => {
        navigate(`/job?job_id=${id}`);
    };
    return (
        <div className="saved-jobs-bg">
            {back && (
                <button onClick={back} className="back-btn">
                    <IoChevronBack /> Back
                </button>
            )}
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
                                <FaHeart className="icon" />
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
    );
};

export default SavedJobs;
