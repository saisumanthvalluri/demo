import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import DynamicStepper from "../../Components/DynamicStepper";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import "./index.css";
import { OTRSteps, otrFormFields } from "../../Config/constants";
import DynamicForm from "../../Components/DynamicForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otrFormSchema } from "../../Schema/otrFieldsSchema";

const OTR = () => {
    const [activeStep, setActiveStep] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(otrFormSchema),
    });

    useEffect(() => {
        // Scroll to the top of the page whenever activeStep changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeStep]);

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

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

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
                    <form onSubmit={onSubmit}>
                        <DynamicForm fields={otrFormFields[activeStep].fields} register={register} errors={errors} />
                    </form>
                    <DynamicStepper
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        OTRSteps={OTRSteps}
                        debouncedSave={debouncedSave}
                        type="bottom"
                        onSubmit={onSubmit}
                    />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default OTR;
