// src/Index.tsx
import React, { useState } from "react";
import Page01 from "./components/page01";
import Page02 from "./components/page02";
import Page03 from "./components/page03";

function Index() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-[20px] font-semibold mb-4">Billing & Membership</h2>
      <div>
        {step === 1 && <Page01 onNext={handleNext} />}
        {step === 2 && <Page02 onNext={handleNext} onPrev={handlePrev} />}
        {step === 3 && <Page03 onPrev={handlePrev} />}
      </div>
    </div>
  );
}

export default Index;
