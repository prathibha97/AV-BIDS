import React from "react";
import { Button } from "@material-tailwind/react";
interface Page01Props {
  onNext: () => void;
}

const Page01: React.FC<Page01Props> = ({ onNext }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 1</h1>
      <p className="mb-4">
        As we discussed, a marketing section should be included on this page
        regarding subscription plans. I will design and update that section.
      </p>
      <Button onClick={onNext} className="bg-primary normal-case">
        Next
      </Button>
    </div>
  );
};

export default Page01;
