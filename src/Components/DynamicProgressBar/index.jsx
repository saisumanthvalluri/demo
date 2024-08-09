import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const DynamicProgressBar = ({ val }) => {
    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#F6F6F3",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "rgba(247, 196, 128, 1)",
        },
    }));
    return <BorderLinearProgress variant="determinate" value={val} />;
};

export default DynamicProgressBar;
