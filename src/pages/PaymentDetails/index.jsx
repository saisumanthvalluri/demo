import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import "./index.css";
import { getApplicationType, getSelectedAdmitCardStatus } from "../../utils/user";

const PaymentDetails = () => {
    const navigate = useNavigate();
    const applicationType = getApplicationType();

    const handleBack = () => {
        // Redirect to job details page
        navigate(-1);
    };
    return (
        <>
            <DynamicHeader type="inner" />
            <div className="pmt-dtl-bg">
                <div className="inner">
                    <h1>Payment Details</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Post Name :</th>
                                <td>Arogya Mitras & Team Leaders - 19 Posts</td>
                            </tr>
                            <tr>
                                <th>Your SPN ID : </th>
                                <td>ABX123XXXX</td>
                            </tr>
                            <tr>
                                <th>Application Type :</th>
                                <td className="app-type-text">{applicationType}</td>
                            </tr>
                            <tr>
                                <th>Application Fee :</th>
                                <td>Rs 100 /-</td>
                            </tr>
                            {getSelectedAdmitCardStatus() === "Yes" && (
                                <tr>
                                    <th>Admit card delivery Fee :</th>
                                    <td>Rs 100 /-</td>
                                </tr>
                            )}
                            <tr>
                                <th>Serviece Fee :</th>
                                <td>Rs 100 /-</td>
                            </tr>
                            
                            <tr>
                                <th>Total Amount :</th>
                                <td>Rs 400 /-</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="nxt-prev-btn-box">
                        <button type="button" onClick={handleBack}>
                            Back
                        </button>
                        <button type="button" className="next">
                            Next
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default PaymentDetails;
