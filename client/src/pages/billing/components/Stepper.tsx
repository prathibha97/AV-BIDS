import React from "react";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  // const steps = ["Subscribe", "Billing", "Review Order", "Place Order"];
  const steps = ['Subscribe', 'Place Order'];

  return (
    <div className="flex mb-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex-1 text-center ${
            index + 1 <= currentStep
              ? "bg-[#8645ff] text-white"
              : "bg-gray-300 text-gray-600"
          } py-2`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
