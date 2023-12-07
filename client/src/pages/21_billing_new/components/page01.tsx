// src/components/page01.tsx
import React from "react";

interface Page01Props {
  onNext: () => void;
}

const Page01: React.FC<Page01Props> = ({ onNext }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 1</h1>

      <button className="bg-blue-500 text-white px-4 py-2" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Page01;
