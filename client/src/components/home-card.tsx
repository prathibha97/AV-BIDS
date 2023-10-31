import React from "react";

function HomeCard({IMG}:any) {
  return (
    <div className="bg-[#F3F1FB] w-full h-64 flex-grow rounded-lg aspect-card p-4">
      <div className="flex items-center justify-between">
        <img src={IMG} alt="" className="w-8 aspect-square rounded-full" />
        <div className=" flex-grow px-4">
          <h6>Expo</h6>
          <p className="text-xs">10-10-2023 to 10-15-2023</p>
        </div>
      </div>
      <div className="my-4">
        <h6>Corporate, Conference</h6>

        <p className="text-xs">
          Phoenix, Arizona <span className="text-secondary text-xl -mb-2">•</span> 3 days left
        </p>
      </div>
    </div>
  );
}

export default HomeCard;
