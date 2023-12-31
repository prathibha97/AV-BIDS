import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)} className="!bg-[#42D27A]">
          <span>1</span>
        </Step>

        <Step
          onClick={() => setActiveStep(1)}
          className={activeStep === 1 ? "active-step" : ""}
        >
          <span>2</span>
        </Step>
      </Stepper>

      <div className="w-full flex justify-between"></div>

      {/* <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
      <style>
        {`.active-step {
          background-color: #42D27A; /* Change this to the desired color */
        }`}
      </style>
    </div>
  );
}

export default DefaultStepper;
