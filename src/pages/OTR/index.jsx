import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import DynamicStepper from "../../Components/DynamicStepper";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import "./index.css";
import { OTRSteps, otrFormFields } from "../../Config/constants";
import DynamicForm from "../../Components/DynamicForm";

const OTR = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const savedOtrStep = JSON.parse(localStorage.getItem("otr_step"));
        if (savedOtrStep) {
            setActiveStep(savedOtrStep);
        }
    }, []);

    const debouncedSave = useCallback(
        debounce((data) => {
            localStorage.setItem("otr_step", JSON.stringify(data));
        }, 300),
        []
    );

    useEffect(() => {
        // Scroll to the top of the page whenever activeStep changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeStep]);

    return (
        <>
            <DynamicHeader type="inner" />
            <div className="otr-bg">
                <div className="inner-body">
                    <h2>ONE TIME REGISTRATION FORM</h2>
                    <DynamicStepper
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        OTRSteps={OTRSteps}
                        debouncedSave={debouncedSave}
                        type="top"
                    />

                    <p className="note">
                        <span>Note: </span> Please fill out the following form to create an account. This information
                        will be used solely for your convenience and will not be shared with any third parties.
                    </p>
                    <h4>{OTRSteps[activeStep]}</h4>
                    <hr />
                    <DynamicForm fields={otrFormFields[activeStep].fields} />
                    <DynamicStepper
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        OTRSteps={OTRSteps}
                        debouncedSave={debouncedSave}
                        type="bottom"
                    />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default OTR;
