import React from "react";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";

const NotFound = () => {
    return (
        <>
            <DynamicHeader type="outer" />
            <div className="not-found-container">
                <img src="/not-found.svg" alt="Not Found" className="not-found-image" />
                <div>
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
        </>
    );
};

export default NotFound;
