import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const DynamicProgressBar = ({ val, barColor, bgColor }) => {
    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            // backgroundColor: "#F6F6F3",
            backgroundColor: bgColor,
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: barColor,
        },
    }));
    return <BorderLinearProgress variant="determinate" value={val} />;
};

export default DynamicProgressBar;
