import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";

export default function TemporaryDrawer({ open, toggleDrawer }) {
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <div className="mob-links">
                <ul>
                    <a href="#ABOUT">
                        <li>About Us</li>
                    </a>
                    <a href="#FAQS">
                        <li>Faq's</li>
                    </a>
                    <a href="#CONTACTUS">
                        <li>Contact Us</li>
                    </a>
                </ul>
                <Divider color="#fff" />
                <button>Login</button>
            </div>
        </Drawer>
    );
}
