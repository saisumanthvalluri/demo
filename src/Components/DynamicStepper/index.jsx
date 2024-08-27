import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./index.css";

const DynamicStepper = ({ setActiveStep, activeStep, OTRSteps, debouncedSave, type, onSubmit }) => {
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // debouncedSave(activeStep + 1);
        setSkipped(newSkipped);
        onSubmit()
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        debouncedSave(activeStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            {type === "top" ? (
                <Box sx={{ width: "100%", margin: "20px 0px" }} className="stepper">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {OTRSteps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            ) : (
                <Box className="stepper-footer">
                    <button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
                        Back
                    </button>

                    <p>{`${activeStep + 1}/${OTRSteps.length}`}</p>

                    <button onClick={handleNext} disabled={activeStep === 4}>
                        {activeStep === OTRSteps.length - 1 ? "Finish" : "Next"}
                    </button>
                </Box>
            )}
        </>
    );
};

export default DynamicStepper;
