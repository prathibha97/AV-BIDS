// src/components/Page02.tsx
import React from "react";

interface Page02Props {
  onPrev: () => void;
}

const Page02: React.FC<Page02Props> = ({ onPrev }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 3</h1>

      <button className="bg-blue-500 text-white px-4 py-2" onClick={onPrev}>
        Previous
      </button>
    </div>
  );
};

export default Page02;
