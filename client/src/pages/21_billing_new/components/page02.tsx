import BillingDetails from "./billing-details";
import CardsOnFile from "./cards-on-file";
import CurrentPlan from "./current-plan";

import React from "react";
import { Button } from "@material-tailwind/react";

interface Page02Props {
  onNext: () => void;
  onPrev: () => void;
}

const Page02: React.FC<Page02Props> = ({ onNext, onPrev }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 2</h1>
      <CurrentPlan />
      <BillingDetails />
      <CardsOnFile />

      <Button onClick={onPrev} className="bg-primary normal-case">
        Previous
      </Button>

      <Button onClick={onNext} className="bg-primary normal-case">
        Next
      </Button>
    </div>
  );
};

export default Page02;
