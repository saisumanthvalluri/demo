import React from "react";
import { IoMdClose } from "react-icons/io";
import "./index.css";

const DynamicModal = ({ setOpen, children }) => {
    return (
        <div className="modal-bg">
            <div className="inner">
                <IoMdClose onClick={() => setOpen(false)} className="close-icon" />
                {children}
            </div>
        </div>
    );
};

export default DynamicModal;
