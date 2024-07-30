import React from "react";
import PieChartWithCenterLabel from "../../Components/pieChart";
import "./index.css";

const adminsData = [
    { value: 60, label: "Active Admins", color: "green" },
    { value: 40, label: "Inactive Admins", color: "red" },
];

const AplicationsData = [
    { value: 60, label: "Success Applications", color: "green" },
    { value: 30, label: "Pending Applications", color: "orange" },
    { value: 10, label: "Failed Applications", color: "red" },
];

const adminData = [
    {
        id: 1,
        img: "",
        name: "Suresh",
        active: true,
        performance: "88",
    },
    {
        id: 2,
        img: "",
        name: "Mahesh",
        active: true,
        performance: "88",
    },
    {
        id: 3,
        img: "",
        name: "Abhi",
        active: false,
        performance: "88",
    },
    {
        id: 4,
        img: "",
        name: "Kiran",
        active: true,
        performance: "88",
    },
    {
        id: 5,
        img: "",
        name: "Rahul",
        active: false,
        performance: "88",
    },
    {
        id: 6,
        img: "",
        name: "Pavan",
        active: true,
        performance: "88",
    },
    {
        id: 7,
        img: "",
        name: "Haresh",
        active: true,
        performance: "88",
    },
    {
        id: 8,
        img: "",
        name: "Ramesh",
        active: false,
        performance: "88",
    },
];

const Home = () => {
    return (
        <div className="home-bg">
            <div className="section-1">
                <div className="filters-box">
                    <h2 className="welcome">
                        Welcome <span>Fathima!</span>
                    </h2>

                    <div className="filters">
                        <input id="DATE" type="date" />

                        <select>
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="pie-chart">
                    <h3>Admin</h3>
                    <PieChartWithCenterLabel data={adminsData} title="Total Admins 100" />
                </div>
                <div className="pie-chart">
                    <h3>Applications</h3>

                    <PieChartWithCenterLabel data={AplicationsData} title="Total Aplications 100" />
                </div>
            </div>
            <div className="section-2">
                <table>
                    <tr>
                        <th>Admin</th>
                        <th>Active</th>
                        <th>Contact</th>
                        <th>Message</th>
                        <th>Performance</th>
                    </tr>
                    {adminData.map((admin) => (
                        <tr key={admin.id}>
                            <td>
                                <div className="avatar-box">
                                    <img
                                        src="/sample.jpeg"
                                        alt="avatar"
                                        id="Avatar"
                                        style={{ borderColor: admin.active ? "green" : "red" }}
                                    />
                                    <div
                                        className="dot"
                                        style={{ backgroundColor: admin.active ? "green" : "red" }}></div>
                                </div>

                                <span>{admin.name}</span>
                            </td>

                            <td>{admin.active ? "Yes" : "No"}</td>
                            <td>phone</td>
                            <td>phone</td>
                            <td>{admin.performance}%</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="section-3"></div>
        </div>
    );
};

export default Home;
