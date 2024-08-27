import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import "./index.css";
import { jobTabs } from "../../../Config/constants";
import MultiLevelDropdown from "../../../Components/MultiLevelDropdown";

const menuItems = [
    {
        label: "Central Govt",
        subItems: [
            { label: "IAS", value: "ias" },
            { label: "IPS", value: "ips" },
            { label: "IRS", value: "irs" },
        ],
    },
    {
        label: "State Govt",
        subItems: [
            { label: "State Civil", value: "state_civil" },
            { label: "State Police", value: "state_police" },
            { label: "State PSC", value: "state_psc" },
        ],
    },
    {
        label: "PSUs",
        subItems: [
            { label: "BHEL", value: "bhel" },
            { label: "ONGC", value: "ongc" },
            { label: "SAIL", value: "sail" },
        ],
    },
    {
        label: "Railways",
        subItems: [
            { label: "Group A", value: "group_a" },
            { label: "Group B", value: "group_b" },
            { label: "Group C", value: "group_c" },
        ],
    },
    {
        label: "Defence",
        subItems: [
            { label: "Army", value: "army" },
            { label: "Navy", value: "navy" },
            { label: "Air Force", value: "air_force" },
        ],
    },
];

const JobFilters = ({ jobTabId, setJobTabId }) => {
    const tabsContainerRef = useRef(null);
    const linksContainerRef = useRef(null);

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
                    <IoIosArrowForward className="nav-icon" onClick={() => onScrollTabs(tabsContainerRef, 250)} />
                </div>
                <div className="links-box">
                    <IoIosArrowBack className="nav-icon" onClick={() => onScrollTabs(linksContainerRef, -250)} />
                    <ul className="links" ref={linksContainerRef}>
                        <li>Syllabus</li>
                        <li>PQP</li>
                        <li>Answer Key</li>
                        <li>Results</li>
                        <li>Cut-Off</li>
                    </ul>
                    <IoIosArrowForward className="nav-icon" onClick={() => onScrollTabs(linksContainerRef, 250)} />
                </div>
            </div>
            <div className="filters-box">
                <h4>{jobTabs[jobTabId - 1].title}</h4>
                <div className="filters">
                    {/* <div>
                        <span>All</span>
                    </div>
                    <div>
                        <span>Andhra Pradesh</span>
                        <IoIosArrowDown className="icon" />
                    </div>
                    <div>
                        <span>Qualification</span>
                        <IoIosArrowDown className="icon" />
                    </div> */}
                    <MultiLevelDropdown menuItems={menuItems} />
                </div>
                <div className="mob-filters">
                    <IoFilter />
                    <span>Filters</span>
                </div>
            </div>
        </>
    );
};

export default JobFilters;
